import { Card, Menu } from 'antd';
import type { MenuProps } from 'antd';
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
  <div className="blog_card_content">
    <Card hoverable>
      <Menu
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={user}
      />
    </Card>
  </div>
);
export default BlogCard;
