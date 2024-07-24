import { createBrowserRouter } from 'react-router-dom'

import { Applayout } from './pages/_layouts/app'
import { Authlayout } from './pages/_layouts/auth'
import { SignIn } from './pages/app/dashboard'
import { Dashboard } from './pages/auth/signin'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <Authlayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
