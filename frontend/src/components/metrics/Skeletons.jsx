import React from 'react';

export const SkeletonCard = ({ className = '' }) => (
  <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 animate-pulse ${className}`}>
    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
    <div className="h-8 bg-slate-100 dark:bg-slate-700 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded w-1/4"></div>
  </div>
);

export const SkeletonChart = ({ className = 'h-[300px]' }) => (
  <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 animate-pulse w-full ${className}`}>
    <div className="h-5 bg-slate-100 dark:bg-slate-700 rounded w-1/4 mb-6"></div>
    <div className="w-full h-full bg-slate-100 dark:bg-slate-700/50 rounded-xl"></div>
  </div>
);
