import { ReactNode } from "react";

export type TPath = {
  name: string | null;
  path?: string;
  element?: ReactNode;
};

export type TRoute = {
  path: string;
  element: ReactNode;
};
