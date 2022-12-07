import React, { ReactNode } from 'react';
import Header from '@/components/globles/Header';
import '@/static/style/pages/index.less';
import { Col, Row } from 'antd';

// 暂时解决方案，后续修改
interface layoutProps {
  children?: ReactNode;
  left?: any;
  center?: any;
  right?: any;
}

const IndexLayout: React.FC<layoutProps> = (props) => {
  const { center, left, right } = props;

  console.log(left);

  return (
    <div className="content">
      <div>
        <Header />
      </div>

      <div className="comm_content">
        <div className="comm_top">123</div>
        <Row className="comm-main" justify="center" gutter={10}>
          <Col className="comm-left" xs={0} sm={0} md={4} lg={2} xl={2} xxl={4}>
            <div className="com_left_box">{left()}</div>
          </Col>
          <Col className="comm-center" xs={24} sm={24} md={16} lg={14} xxl={16}>
            {center()}
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={0} lg={0} xxl={4}>
            {right()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IndexLayout;
