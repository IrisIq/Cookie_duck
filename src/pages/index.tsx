import Header from '../components/Header';
import ArticalBox from '../components/ArticalBox';
import '@/static/style/pages/index.less';
import { Col, Row, Menu } from 'antd';

export default function IndexPage() {
  return (
    <div className="content">
      <Header />

      <div className="comm_content">
        <Row className="comm-main" justify="center" gutter={10}>
          <Col className="comm-left" xs={0} sm={0} md={4} lg={4} xl={4}>
            <div className="com_left_box">左侧</div>
          </Col>
          <Col className="comm-center" xs={24} sm={24} md={20} lg={16} xl={16}>
            <ArticalBox></ArticalBox>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={0} lg={4} xl={4}>
            右侧
          </Col>
        </Row>
      </div>
    </div>
  );
}
