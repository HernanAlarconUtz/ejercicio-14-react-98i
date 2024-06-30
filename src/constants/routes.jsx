import { createBrowserRouter } from "react-router-dom";

import PublicView from "../views/routing/PublicView";
import PrivateView from "../views/routing/PrivateView";
import RootView from "../views/routing/RootView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // 2 tipos de rutas publicas y privadas
      {
        path: "",
        element: <PublicView />,
        children: [
          {
            path: "",
            element: <p>Home</p>,
          },
          {
            path: "detail/:id",
            element: <p>Detalle</p>,
          },
          {
            path: "login",
            element: <p>Login</p>,
          },
          {
            path: "Register",
            element: <p>Register</p>,
          },
        ],
      },
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
