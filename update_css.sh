#!/bin/bash
# First, let's update index.css to use CSS variables
cat << 'CSS' > frontend/src/index.css
@import "tailwindcss";
@config "../tailwind.config.js";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary-50: #f5f7ff;
  --color-primary-100: #ebf0fe;
  --color-primary-200: #ced9fd;
  --color-primary-300: #b1c2fb;
  --color-primary-400: #7694f8;
  --color-primary-500: #3b66f5;
  --color-primary-600: #355cd3;
  --color-primary-700: #2c4db0;
  --color-primary-800: #233d8d;
  --color-primary-900: #1d3273;

  --color-dark-50: #f6f6f6;
  --color-dark-100: #e7e7e7;
  --color-dark-200: #d1d1d1;
  --color-dark-300: #b0b0b0;
  --color-dark-400: #888888;
  --color-dark-500: #6d6d6d;
  --color-dark-600: #5d5d5d;
  --color-dark-700: #4f4f4f;
  --color-dark-800: #454545;
  --color-dark-900: #3d3d3d;
  --color-dark-950: #1a1a1a;

  --font-sans: "Inter", system-ui, sans-serif;
}

:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --border-color: #e2e8f0;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: var(--text-primary);
  background-color: var(--bg-primary);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root.dark {
  --bg-primary: #1a1a1a; /* dark-950 */
  --bg-secondary: #3d3d3d; /* dark-900 */
  --bg-card: #3d3d3d; /* dark-900 */
  --text-primary: #f6f6f6; /* dark-50 */
  --text-secondary: #b0b0b0; /* dark-300 */
  --border-color: #454545; /* dark-800 */
  
  color: var(--text-primary);
  background-color: var(--bg-primary);
}

body {
  margin: 0;
  display: flex;
  place-content: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  width: 100%;
}

@layer base {
  body {
    @apply bg-slate-50 text-slate-900 dark:bg-dark-950 dark:text-dark-50 antialiased;
  }
}
CSS
