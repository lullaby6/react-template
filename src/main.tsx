import { StrictMode  } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

import { router } from '@/router'

import '@/styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)