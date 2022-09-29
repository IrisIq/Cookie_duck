import { Card, Menu, Col, Row, MenuProps, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

import '@/static/style/components/BlogCard.less';

const user: MenuProps['items'] = [
  {
    label: 'Cookie',
    key: 'cookie',
    // icon: <MailOutlined />,
  },
  {
    label: 'Duck',
    key: 'duck',
    // icon: <MailOutlined />,
  },
];

const BlogCard: React.FC = () => (
  <Card hoverable>
    <Row justify="center">
      <Col>
        <Menu mode="horizontal" items={user} defaultSelectedKeys={['cookie']} />
      </Col>
    </Row>

    <Row justify="center">
      <Avatar icon={<AntDesignOutlined />} size={100} />
    </Row>

    {/* 个人信息  */}
    <div className="personal_information_box">
      <Row justify="center">
        <span>这是一块饼干</span>
      </Row>

      <Row justify="center">
        <span>他是一名程序员</span>
      </Row>

      <div className="statistics_box">
        <div className="item">
          <span className="title">文章</span>
          <span className="number">105</span>
        </div>
        <div className="item">
          <span className="title">分类</span>
          <span className="number">10</span>
        </div>
        <div className="item">
          <span className="title">标签</span>
          <span className="number">99</span>
        </div>
      </div>
    </div>

    <Row justify="space-between">
      <Col>
        <span>Bilibili</span>
      </Col>
      <Col>
        <span>Github</span>
      </Col>
    </Row>
  </Card>
);
export default BlogCard;
