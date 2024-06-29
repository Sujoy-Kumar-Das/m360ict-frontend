import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../../ui/shared/navbar/Navbar";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "0 20px" }}>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
