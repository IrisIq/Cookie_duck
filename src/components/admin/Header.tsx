import { useEffect, useState } from 'react';
import { history } from 'umi';

import { Col, Row, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import './css/header.less';

const items: MenuProps['items'] = [
  { label: '前往博客', key: '/', icon: <HomeOutlined /> },
];

const Header: React.FC = (props) => {
  const handleMenu: MenuProps['onClick'] = (e) => {
    console.log(e.keyPath);
    if (e.keyPath.length > 1) {
      let url = '';
      for (let index = e.keyPath.length - 1; index >= 0; index--) {
        // console.log(e.keyPath[index]);

        url += e.keyPath[index];
      }
      history.push('/index' + url);
    } else {
      history.push(e.key);
    }
  };

  return (
    <div className="header">
      <Row justify="space-between">
        <Col xs={24} sm={12} md={12} lg={12} xl={14}>
          <div className="header_text_box">
            <span className="header_logo">鸭鸭饼饼株式会社</span>
            <span className="header_txt">这是他们后台</span>
          </div>
        </Col>
        <Col xs={0} sm={12} md={12} lg={10} xl={10}>
          <Menu mode="horizontal" items={items} onClick={handleMenu}></Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
