import React, { ReactNode, useState } from 'react';
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
    label: '文章管理',
    key: 'mail',
    icon: <MailOutlined />,
  },

  {
    label: '系统管理',
    key: 'mail',
    icon: <MailOutlined />,
    children: [
      {
        label: '字典管理',
        key: 'setting:1',
      },
    ],
  },
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const AdminMenu: React.FC = (props) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      // style={{ width: 256 }}
      items={menuItem}
    />
  );
};

export default AdminMenu;
