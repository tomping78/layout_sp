import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
// import "../node_modules/antd/dist/antd.min.css";
import "./index.css";
import styled from 'styled-components';
import { Layout, Menu, ConfigProvider, theme, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  FormOutlined
} from '@ant-design/icons';

const { Sider, Header, Content } = Layout;
const LogoArea = styled.div`
  color:#fff;
  font-size: 20px;
  width:100%;
  height:60px;
  padding:5px;
  background:#111 url(./opf.png) no-repeat 0 0;
`


function App() {
  const [collapsed, setCollapsed] = useState(false);

  const {defaultAlgorithm, darkAlgorithm} = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <ConfigProvider theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <LogoArea></LogoArea>
          <Menu>
            <Menu.Item key={"1"} icon={<HomeOutlined />}>
              <NavLink to={"/"}>Home</NavLink>
            </Menu.Item>
            <Menu.Item key={"2"} icon={<FormOutlined />}>
              <NavLink to={"/board"}>Board</NavLink>
            </Menu.Item>
          </Menu>
          <Button onClick={handleClick}>
            Change Theme to {isDarkMode ? "Light" : "Dark"}
          </Button>
          
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              borderBottom:'1px solid #ccc'
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              background:'#f0f2f5'
            }}
          >
            <Routes>
                <Route index element={<Home />} />
                <Route path="/board" element={<Board />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
