import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import '@/static/style/pages/index.less';
import { Col, Row, Menu } from 'antd';

const IndexPage: React.FC = () => {
  return (
    <div className="content">
      <Header />

      <div className="comm_content">
        <Row className="comm-main" justify="center" gutter={10}>
          <Col className="comm-left" xs={0} sm={0} md={4} lg={2} xl={2} xxl={2}>
            <div className="com_left_box">
              <BlogCard></BlogCard>
            </div>
          </Col>
          <Col className="comm-center" xs={24} sm={24} md={16} lg={14} xxl={16}>
            中间
          </Col>
          <Col
            className="comm-right"
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={2}
            xxl={2}
          >
            右侧
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IndexPage;
