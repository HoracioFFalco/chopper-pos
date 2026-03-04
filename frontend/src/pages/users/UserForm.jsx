import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import FormField from '../../components/ui/FormField';
import api from '../../api/api';
import { useAuthStore } from '../../store/authStore';

const UserForm = ({ initialData, onSubmit, isLoading, onCancel }) => {
  const { user, activeBranch } = useAuthStore();
  const [branches, setBranches] = useState([]);

  // Construcción dinámica del esquema basada en el rol actual
  const userSchema = z.object({
    name: z.string().min(3, 'Mínimo 3 caracteres'),
    email: z.string().email('Email inválido'),
    password: initialData ? z.string().optional() : z.string().min(6, 'Mínimo 6 caracteres'),
    role: z.enum(['admin', 'encargado', 'cajero']),
    branch_id: z.string().optional(),
  }).refine((data) => {
    if (data.role !== 'admin' && !data.branch_id) {
      return false;
    }
    return true;
  }, {
    message: 'Sucursal requerida para este rol',
    path: ['branch_id'],
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {
      name: '',
      email: '',
      password: '',
      role: 'cajero',
      branch_id: user.role === 'encargado' ? activeBranch : '',
    },
  });

  const selectedRole = watch('role');

  useEffect(() => {
    if (user.role === 'admin') {
      api.get('/branches').then(res => setBranches(res.data.data));
    }
    if (initialData) {
      reset({ ...initialData, password: '' });
    }
  }, [initialData, reset, user.role]);

  const rolesPermitidos = user.role === 'admin' 
    ? [{ val: 'admin', label: 'Admin' }, { val: 'encargado', label: 'Encargado' }, { val: 'cajero', label: 'Cajero' }]
    : [{ val: 'cajero', label: 'Cajero' }];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField label="Nombre Completo" error={errors.name?.message}>
        <input
          {...register('name')}
          className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
        />
      </FormField>

      <FormField label="Email" error={errors.email?.message}>
        <input
          {...register('email')}
          type="email"
          className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
        />
      </FormField>

      {!initialData && (
        <FormField label="Contraseña" error={errors.password?.message}>
          <input
            {...register('password')}
            type="password"
            className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </FormField>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Rol" error={errors.role?.message}>
          <select
            {...register('role')}
            className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          >
            {rolesPermitidos.map(r => (
              <option key={r.val} value={r.val}>{r.label}</option>
            ))}
          </select>
        </FormField>
        
        {selectedRole !== 'admin' && (
          <FormField label="Sucursal" error={errors.branch_id?.message}>
            <select
              {...register('branch_id')}
              disabled={user.role === 'encargado'}
              className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 outline-none transition-all disabled:opacity-50"
            >
              <option value="">Seleccione sucursal...</option>
              {user.role === 'admin' ? (
                branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)
              ) : (
                <option value={activeBranch}>Mi Sucursal Actual</option>
              )}
            </select>
          </FormField>
        )}
      </div>

      <div className="flex space-x-3 pt-4 border-t border-slate-200 dark:border-slate-700">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-2 px-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 rounded-lg transition-colors font-medium"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 py-2 px-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors font-medium disabled:opacity-50"
        >
          {isLoading ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
