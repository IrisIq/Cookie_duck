import { Card, Menu, Col, Row, MenuProps, Avatar, Divider } from 'antd';
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
  <div className="blog-box">
    <Card hoverable>
      <Row justify="center">
        <Col>
          <Menu
            mode="horizontal"
            items={user}
            defaultSelectedKeys={['cookie']}
          />
        </Col>
      </Row>

      <Row justify="center">
        <Avatar icon={<AntDesignOutlined />} size={100} />
      </Row>

      {/* 个人信息  */}
      <div className="personal_information_box">
        <Row justify="center">
          <div>这是一块饼干</div>
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

      <Row justify="center">
        <Col span={6} pull={2}>
          <span className="text">Bilibili</span>
        </Col>
        <Col span={6} push={2}>
          <span className="text">Github</span>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6} pull={2}>
          <div>
            <span className="text">占位</span>
          </div>
        </Col>
        <Col span={6} push={2}>
          <span className="text">占位</span>
        </Col>
      </Row>
      <Divider />
      <div>123</div>
    </Card>
  </div>
);
export default BlogCard;
