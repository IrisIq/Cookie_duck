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
    <Row gutter={0}>
      <Col
        xs={12}
        sm={12}
        md={7}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 4, offset: 1 }}
      >
        <span className="header_logo">鸭鸭饼饼株式会社</span>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3} xl={2}>
        <span className="header_txt">这是他们的博客</span>
      </Col>
    </Row>

    <Row justify="end">
      <Col xs={0} sm={0} md={12} lg={8} xl={5}>
        <Menu mode="horizontal" items={items}></Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
