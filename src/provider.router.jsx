import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./pages/layout";
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error";

import ShowcaseLayout from './pages/showcase/layout'

import ConvertersLayout from './pages/showcase/converters/layout';
import ConvTemperature from "./pages/showcase/converters/tempr";


// import VizLayout from './pages/viz/layout';
// import Viz1 from './pages/viz/viz1';

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
        path: "/showcase",
        element: <ShowcaseLayout />,
        children: [
          {
            path: "/showcase/converters",
            element: <ConvertersLayout />,
            children: [
              {
                path: "/showcase/converters/conv.tempr",
                element: <ConvTemperature />,
              },
            ]
          },
          // {
          //   path: "/viz",
          //   element: <VizLayout />,
          //   children: [
          //     {
          //       path: "/viz/viz1",
          //       element: <Viz1 />,
          //     },
          //   ]
          // },
          
        ]
      },
      
    ]
  },
]

export default function Router () {
  const router = createBrowserRouter(configRoutes);  
  return <RouterProvider router={router} />
}