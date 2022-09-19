import React from 'react';
import '@/static/style/components/Header.less';
import { Col, Row, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  { label: '首页', key: '1', icon: <HomeOutlined /> },
  { label: '分类', key: '2', icon: <HomeOutlined /> },
  {
    label: '工具',
    key: '3',
    icon: <HomeOutlined />,
    children: [
      {
        label: '科学饮食计算器',
        key: '3-1',
      },
      {
        label: 'Option 1',
        key: 'setting:1',
      },
    ],
  },
];

const Header = () => (
  <div className="header">
    <Row justify="space-between">
      <Col xs={24} sm={12} md={12} lg={12} xl={14}>
        <div className="header_text_box">
          <span className="header_logo">鸭鸭饼饼株式会社</span>
          <span className="header_txt">这是他们的博客</span>
        </div>
      </Col>
      <Col xs={0} sm={12} md={12} lg={10} xl={10}>
        <Menu mode="horizontal" items={items}></Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
