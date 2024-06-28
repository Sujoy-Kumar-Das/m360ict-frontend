import { NavLink } from "react-router-dom";
import { TPath, TSiderItem } from "../types";

const generateSiderPaths = (routes: TPath[]) => {
  return routes.reduce((acc: TSiderItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.path,
        label: <NavLink to={item.path}>{item.name}</NavLink>,
      });
    }
    return acc;
  }, []);
};

export default generateSiderPaths;
