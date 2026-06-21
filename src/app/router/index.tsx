import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/login-page/ui/LoginPage";
import { MainLayout } from "@/pages/main-layout/ui/MainLayout";
import { CatalogLayout, Catalog, ProjectPage } from "@/pages/catalog-layout";
import { MyPlatformLayout } from "@/pages/my-platform-layout/ui/MyPlatformLayout";
import { ProjectsGrid } from "@/widgets/projects-grid";
import { ProjectActivities } from "@/pages/my-platforms-pages/project-activities/ui/ProjectActivities";
import { ProtectedRoute } from "./ProtectedRoute";
import { ROUTES } from "@/shared";
import { RootRoute } from "./RootRoute";
import { MyProfile } from "@/pages/my-profile";
import CreateProjectPage from "@/pages/create-project/ui/CreateProjectPage";

export const router = createBrowserRouter([
  {
    element: <RootRoute />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.MAIN,
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.CATALOG} replace />,
          },

          {
            path: ROUTES.CATALOG,
            element: <CatalogLayout />,
            children: [
              {
                index: true,
                element: <Navigate to={ROUTES.CATALOG_ALL_PROJECTS} replace />,
              },
              {
                element: <Catalog />,
                children: [
                  {
                    path: ROUTES.CATALOG_ALL_PROJECTS,
                    element: <ProjectsGrid />,
                  },
                  {
                    path: ROUTES.CATALOG_RECRUITING,
                    element: <ProjectsGrid />,
                  },
                  {
                    path: ROUTES.CATALOG_IN_WORK,
                    element: <ProjectsGrid />,
                  },
                ],
              },
              {
                path: ROUTES.CATALOG_PROJECT,
                element: <ProjectPage />,
              },
            ],
          },

          {
            element: <ProtectedRoute />,
            children: [
              {
                path: ROUTES.MY_PLATFORM,
                element: <MyPlatformLayout />,
                children: [
                  {
                    index: true,
                    element: (
                      <Navigate to={ROUTES.MY_PLATFORM_ACTIVITIES} replace />
                    ),
                  },
                  {
                    path: ROUTES.MY_PLATFORM_ACTIVITIES,
                    element: <ProjectActivities />,
                  },
                  {
                    path: ROUTES.MY_PLATFORM_CREATE,
                    element: <CreateProjectPage/>
                  },
                ],
              },
            ],
          },

          {
            path: ROUTES.MY_PROFILE,
            element: <MyProfile />
          },
        ],
      },
      {
        path: "*",
        // TODO - сделать NotFoundPage
        element: <Navigate to={ROUTES.LOGIN} replace />,
      },
    ],
  },
]);
