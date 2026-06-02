import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProjectsGrid } from '@/widgets/projects-grid';
import { LoginPage } from '@/pages/login-page/ui/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import { MainLayout } from '@/pages/main-layout/ui/MainLayout';
import { CatalogLayout, Catalog, ProjectPage } from "@/pages/catalog-layout";
import { MyPlatformLayout } from '@/pages/my-platform-layout/ui/MyPlatformLayout';
import { ProjectActivities } from '@/pages/my-platforms-pages/project-activities/ui/ProjectActivities';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/catalog" replace />
          },
          {
            path: '/catalog',
            element: <CatalogLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="all-projects" replace />
              },
              {
                element: <Catalog />,
                children: [
                  {
                    path: 'all-projects',
                    element: <ProjectsGrid />
                  },
                  {
                    path: 'recruiting',
                    element: <ProjectsGrid />
                  },
                  {
                    path: 'in-work',
                    element: <ProjectsGrid />
                  }
                ]
              },
              {
                path: 'projects/:id',
                element: <ProjectPage />
              }
            ]
          },
          {
            path: '/my-platform',
            element: <MyPlatformLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="project-activities" replace />
              },
              {
                path: 'project-activities',
                element: <ProjectActivities />
              }
            ]
          }
        ]
      }
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);