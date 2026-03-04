#!/bin/bash

# Update text colors
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-50/text-slate-900 dark:text-slate-100/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-100/text-slate-900 dark:text-slate-100/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-200/text-slate-800 dark:text-slate-200/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-300/text-slate-700 dark:text-slate-300/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-400/text-slate-600 dark:text-slate-400/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/text-dark-500/text-slate-500 dark:text-slate-500/g' {} +

# Update background colors
find frontend/src -type f -name "*.jsx" -exec sed -i 's/bg-dark-950/bg-slate-50 dark:bg-slate-900/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/bg-dark-900/bg-white dark:bg-slate-800/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/bg-dark-800/bg-slate-100 dark:bg-slate-700/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/bg-dark-700/bg-slate-200 dark:bg-slate-600/g' {} +

# Update border colors
find frontend/src -type f -name "*.jsx" -exec sed -i 's/border-dark-800/border-slate-200 dark:border-slate-700/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/border-dark-700/border-slate-300 dark:border-slate-600/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/border-dark-900/border-slate-100 dark:border-slate-800/g' {} +

# Update divide colors
find frontend/src -type f -name "*.jsx" -exec sed -i 's/divide-dark-800/divide-slate-200 dark:divide-slate-700/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/divide-dark-700/divide-slate-300 dark:divide-slate-600/g' {} +

# Update hover colors
find frontend/src -type f -name "*.jsx" -exec sed -i 's/hover:bg-dark-800/hover:bg-slate-100 dark:hover:bg-slate-700/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/hover:bg-dark-700/hover:bg-slate-200 dark:hover:bg-slate-600/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/hover:text-dark-50/hover:text-slate-900 dark:hover:text-slate-100/g' {} +
find frontend/src -type f -name "*.jsx" -exec sed -i 's/hover:text-dark-200/hover:text-slate-800 dark:hover:text-slate-200/g' {} +

