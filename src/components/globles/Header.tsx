import { useEffect, useState } from 'react';
import { history } from 'umi';

import { Col, Row, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import '@/static/style/components/Header.less';

const items: MenuProps['items'] = [
  { label: '首页', key: '/', icon: <HomeOutlined /> },
  {
    label: '分类',
    key: '/class',
    icon: <HomeOutlined />,
    children: [
      {
        label: '前端技术',
        key: '/web',
      },
      {
        label: '后端技术',
        key: '/server',
      },
    ],
  },
  {
    label: '他们的常用工具',
    key: '3',
    icon: <HomeOutlined />,
    children: [
      {
        label: '饮食规划',
        key: '3-1',
      },
      {
        label: '账单记录',
        key: 'setting:1',
      },
    ],
  },
];

const Header: React.FC = (props) => {
  const handleMenu: MenuProps['onClick'] = (e) => {
    // console.log(e.keyPath);
    if (e.keyPath.length > 1) {
      let url = '';
      for (let index = e.keyPath.length - 1; index >= 0; index--) {
        // console.log(e.keyPath[index]);

        url += e.keyPath[index];
      }
      // console.log(url);

      history.push(url);
    } else {
      history.push(e.key);
    }
    // props.history.push(`/home/message/detail`, { id: 1, title: 2 });
  };
  return (
    <div className="header">
      <Row justify="space-between">
        <Col xs={24} sm={12} md={12} lg={12} xl={14}>
          <div className="header_text_box">
            <span className="header_logo">鸭鸭饼饼株式会社</span>
            <span className="header_txt">这是他们的博客</span>
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
