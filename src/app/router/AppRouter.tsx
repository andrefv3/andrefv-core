import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '@/features/Home/HomePage';
import { Error404 } from '@shared/ui';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error404 />, // Atrapa errores de código en cualquier subruta
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Aquí puedes añadir más rutas: { path: 'portfolio', element: <PortfolioPage /> }
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;