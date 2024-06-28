import { TPath, TRoute } from "../types";

const generateRoutes = (paths: TPath[]) => {
  return paths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({ path: item.path, element: item.element });
    }
    return acc;
  }, []);
};

export default generateRoutes;
