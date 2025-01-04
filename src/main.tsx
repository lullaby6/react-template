import { ReactNode, StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import '@/index.css'

const files = import.meta.glob('/src/routes/**/*.{tsx,jsx}');

const routes: Record<string, string> = {}

for (const file in files) {
  const route = file.replace('/src/routes', '').replace('index', '').replaceAll('$', ':').replace(/\.(tsx|jsx)$/, '');
  routes[route] = file.replace('/src', '.');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          {Object.keys(routes).map((path) => {
            const Component = lazy(() => import(/* @vite-ignore */ `${routes[path]}`));
            return <Route key={path} path={path} element={<Component /> as ReactNode} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)