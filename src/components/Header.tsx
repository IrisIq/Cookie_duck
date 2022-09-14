import React from 'react';
import '../static/style/components/Header.less';
import { Col, Row, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { HomeOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  { label: '菜单项一', key: 'item-1', icon: <HomeOutlined /> },
  { label: '菜单项一', key: 'item-1', icon: <HomeOutlined /> },
  { label: '菜单项一', key: 'item-1', icon: <HomeOutlined /> },
];

const Header = () => (
  <div className="header">
    <Row>
      <Col>
        <span className="header_logo">Cookie_Duck</span>
      </Col>
      <Col>
        <span className="header_txt">鸭鸭饼饼的博客</span>
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
