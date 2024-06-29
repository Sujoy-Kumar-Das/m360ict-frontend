import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { logOut } from "../../../../redux/features/auth/auth.reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/redux.hooks";
import { mainRoutePaths } from "../../../../routes/main.routes.paths";
import generateSiderPaths from "../../../../utils/generate.sider.paths";

export default function Navbar() {
  // redux hook for get the user info
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const items = generateSiderPaths(mainRoutePaths);

  console.log(user);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
        <div>
          {user?.email ? (
            <Button type="primary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button type="primary">
              <Link to={"/auth/login"}>Login</Link>
            </Button>
          )}
        </div>
      </Header>
    </div>
  );
}
