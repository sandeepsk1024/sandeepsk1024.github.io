import LayoutPage from "./pages/layout";
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error";
import ToolsPage from './pages/tools';
import VizPage from './pages/viz';

export default [
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/tools",
        element: <ToolsPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/viz",
        element: <VizPage />,
        errorElement: <ErrorPage />
      },
    ]
  },
  
]