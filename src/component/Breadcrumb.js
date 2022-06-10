import React from 'react';
import { Breadcrumb, Menu } from 'antd';
import {
    HomeOutlined,
  } from '@ant-design/icons';

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              General
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              Layout
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              Navigation
            </a>
          ),
        },
      ]}
    />
  );

function Breadcrum(props) {
    return (
        <Breadcrumb style={{marginBottom:10}}>
            <Breadcrumb.Item href="">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
            Component
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
            General
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default Breadcrum;