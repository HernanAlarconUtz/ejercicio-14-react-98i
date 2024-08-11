import { createBrowserRouter } from "react-router-dom";

import PublicView from "../views/routing/PublicView";
import PrivateView from "../views/routing/PrivateView";
import RootView from "../views/routing/RootView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";

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
            element: <HomeView />,
          },
          {
            path: "detail/:id",
            element: <p>Detalle</p>,
          },
          {
            path: "login",
            element: <LoginView />,
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
