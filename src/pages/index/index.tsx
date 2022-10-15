import Header from '@/components/globles/Header';
import BlogCard from '@/components/globles/BlogCard';

import '@/static/style/pages/index.less';
import { Col, Row } from 'antd';
import { Switch } from 'umi';

const IndexPage: React.FC = (props) => {
  return (
    <div className="content">
      <Header />

      <div className="comm_content">
        <Row className="comm-main" justify="center" gutter={10}>
          <Col className="comm-left" xs={0} sm={0} md={4} lg={2} xl={2} xxl={4}>
            <div className="com_left_box">
              <BlogCard></BlogCard>
            </div>
          </Col>
          <Col className="comm-center" xs={24} sm={24} md={16} lg={14} xxl={16}>
            {props.children}
            <Switch></Switch>
          </Col>
          <Col
            className="comm-right"
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={2}
            xxl={4}
          >
            右侧
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IndexPage;
