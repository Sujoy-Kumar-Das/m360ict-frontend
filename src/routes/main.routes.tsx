import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import generateRoutes from "../utils/generate.routes";
import { mainRoutePaths } from "./main.routes.paths";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: generateRoutes(mainRoutePaths),
  },
]);
