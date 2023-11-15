import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";

import { Footer as CustomFooter } from "./footer/footer";
import { Header as CustomHeader } from "./header/header";

const { Header, Footer, Content } = AntdLayout;

const Layout = () => {
  const headerStyle = {
    fontFamily: "Inter, sans-serif",
    backgroundColor: "white",
    lineHeight: "normal",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 50px",
  };

  const contentStyle = {
    fontFamily: "Inter, sans-serif",
    lineHeight: "normal",
    padding: "25px 50px",
  };

  const footerStyle = {
    fontFamily: "Inter, sans-serif",
    lineHeight: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px 50px",
  };

  const layoutStyle = {
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    lineHeight: "normal",
  };

  return (
    <AntdLayout style={layoutStyle}>
      <Header style={headerStyle}>
        <CustomHeader />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>
        <CustomFooter />
      </Footer>
    </AntdLayout>
  );
};

export { Layout };
