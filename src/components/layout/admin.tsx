import React, { ReactNode } from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Card } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

interface layoutProps {
  children?: ReactNode;
  left?: any;
  center?: any;
  right?: any;
  content?: any;
}

const AdminLayout: React.FC<layoutProps> = (props) => {
  const { center, left, right, content } = props;

  return (
    <Layout style={{ height: '100%' }}>
      <Header className="header">{center()}</Header>
      <Content style={{ padding: '0 50px', marginTop: '58px' }}>
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
            backgroundColor: '#F0F2F5',
            height: '100%',
          }}
        >
          <Sider className="site-layout-background" width={200} theme={'light'}>
            {left()}
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              backgroundColor: '#F0F2F5',
            }}
          >
            <Card style={{ width: '100%', height: '100%', overflow: 'auto' }}>
              {content()}
            </Card>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AdminLayout;
