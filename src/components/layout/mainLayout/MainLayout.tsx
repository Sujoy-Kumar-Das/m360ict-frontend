import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiderLayout from "../siderLayout/SiderLayout";
const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout() {
  return (
    <Layout>
      <SiderLayout />
      <Layout>
        <Content>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
