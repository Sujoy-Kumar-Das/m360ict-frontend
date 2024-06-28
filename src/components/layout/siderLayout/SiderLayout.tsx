import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { mainRoutePaths } from "../../../routes/main.routes.paths";
import generateSiderPaths from "../../../utils/generate.sider.paths";

export default function SiderLayout() {
  const items = generateSiderPaths(mainRoutePaths);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ position: "sticky", top: 0, padding: " 30px 5px 5px 0px" }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
}
