import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./pages/layout";
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error";

import ToolsLayout from './pages/tools/layout';
import TemperatureConv from "./pages/tools/converter.tmp";


import VizLayout from './pages/viz/layout';
import Viz1 from './pages/viz/viz1';

const configRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/tools",
        element: <ToolsLayout />,
        children: [
          {
            path: "/tools/conv.tempr",
            element: <TemperatureConv />,
          },
        ]
      },
      {
        path: "/viz",
        element: <VizLayout />,
        children: [
          {
            path: "/viz/viz1",
            element: <Viz1 />,
          },
        ]
      },
    ]
  },
]

export default function Router () {
  const router = createBrowserRouter(configRoutes);  
  return <RouterProvider router={router} />
}