import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/redux.hooks";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const user = useAppSelector((state) => state.auth.user);

  console.log(user);

  if (!user?.email) {
    return <Navigate to={"/auth/login"} />;
  } else {
    return children;
  }
}
