import React, { ReactNode, useState } from 'react';
import { history } from 'umi';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './css/menu.less';

type MenuItem = Required<MenuProps>['items'][number];

const menuItem: MenuProps['items'] = [
  {
    label: '首页',
    key: 'index',
    icon: <MailOutlined />,
  },
  {
    label: '文章管理',
    key: 'article',
    icon: <MailOutlined />,
  },

  {
    label: '系统管理',
    key: 'sys',
    icon: <MailOutlined />,
    children: [
      {
        label: '字典管理',
        key: 'dic',
      },
    ],
  },
];
interface ClickType {
  keyPath: String[];
}

const AdminMenu: React.FC = (props) => {
  const itemOnClick = ({ keyPath }: ClickType) => {
    let path: string = '/';
    console.log(keyPath);

    if (keyPath[0] === 'index') {
      history.push('/admin');
      return;
    }
    console.log(keyPath);

    for (let index = keyPath.length - 1; index >= 0; index--) {
      console.log(1);
      if (index === 0) {
        path += keyPath[index];
      } else {
        path += keyPath[index] + '/';
      }
    }
    history.push('/admin' + path);
    console.log(path);

    // console.log(keyPath);
  };

  return <Menu mode="inline" onClick={itemOnClick} items={menuItem} />;
};

export default AdminMenu;
