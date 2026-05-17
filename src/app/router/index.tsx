import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CatalogPage } from '@/pages/Catalog';
import { MySpacePage } from '@/pages/my-space';
import { ProjectsGallery } from '@/widgets/projects-gallery';
import { ProjectsGrid } from '@/widgets/projects-grid';
import { LoginPage } from '@/pages/login-page/ui/LoginPage';
import { ProtectedRoute } from '@/shared/ui/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute>
                <CatalogPage />
              </ProtectedRoute>,
    children: [
      {
        path: '',
        element: <ProjectsGallery />,
        children: [
          {
            path: ':tabNumber?',
            element: <ProjectsGrid />,
          },
        ],
      },
      {
        path: 'inProgress',
        element: <ProjectsGallery />,
        children: [
          {
            path: ':tabNumber?',
            element: <ProjectsGrid />,
          },
        ],
      },
      {
        path: 'completed',
        element: <ProjectsGallery />,
        children: [
          {
            path: ':tabNumber?',
            element: <ProjectsGrid />,
          },
        ],
      },
    ],
  },
  {
    path: '/my-space',
    element: <ProtectedRoute><MySpacePage /></ProtectedRoute>,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);