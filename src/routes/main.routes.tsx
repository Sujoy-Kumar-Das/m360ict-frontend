import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import PrivateLayout from "../components/layout/privateLayout/PrivateLayout";
import RegistrationLayout from "../components/layout/registrationLayout/RegistrationLayout";
import CreateAccount from "../pages/create-account/CreateAccount";
import Login from "../pages/login/Login";
import generateRoutes from "../utils/generate.routes";
import { mainRoutePaths } from "./main.routes.paths";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateLayout>
        <MainLayout />
      </PrivateLayout>
    ),
    children: generateRoutes(mainRoutePaths),
  },
  {
    path: "/auth",
    element: <RegistrationLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "create-account", element: <CreateAccount /> },
    ],
  },
]);
