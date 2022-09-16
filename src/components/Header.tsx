import React from 'react';
import '../static/style/components/Header.less';
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
    <Row>
      <Col>
        <span className="header_logo">鸭鸭饼饼株式会社</span>
      </Col>
      <Col>
        <span className="header_txt">这是他们的博客</span>
      </Col>
    </Row>

    <Row justify="center">
      <Col>
        <Menu mode="horizontal" items={items}></Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
