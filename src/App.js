import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
import "../node_modules/antd/dist/antd.min.css";
import "./index.css";
import { Layout, Menu } from "antd";

const { Sider, Content: AntdContent } = Layout;

function App() {
  const [collapsed] = useState(false);

  return (
    <Layout className="site-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key={"1"}>
            <NavLink to={"/"}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key={"2"}>
            <NavLink to={"/board"}>Board</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdContent
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </AntdContent>
    </Layout>
  );
}

export default App;
