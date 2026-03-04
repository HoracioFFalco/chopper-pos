import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const MetricsLayout = () => {
  const { user } = useAuthStore();
  
  const navItems = [
    { name: 'Dashboard', path: '/metrics', end: true },
    { name: 'Ventas', path: '/metrics/sales' },
    { name: 'Productos', path: '/metrics/products' },
    { name: 'Clientes', path: '/metrics/clients' },
    { name: 'Inventario', path: '/metrics/inventory' },
  ];

  if (user.role === 'admin') {
    navItems.push({ name: 'Consolidado', path: '/metrics/consolidated' });
  }

  return (
    <div className="space-y-6">
      <div className="flex overflow-x-auto space-x-2 bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-900/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:bg-slate-700'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MetricsLayout;
