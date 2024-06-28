import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export default function SiderLayout() {
  const items = [
    { path: "/products", title: "Products", id: 1 },
    { path: "/products/:id", title: "Products", id: 1 },
  ].map((item, index) => ({
    key: item.id,
    label: item.title,
  }));
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
