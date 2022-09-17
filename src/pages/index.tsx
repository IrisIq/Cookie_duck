import styles from './index.less';
import Header from '../components/Header';
import { Col, Row, Menu } from 'antd';



export default function IndexPage() {
  return (
    <div>
      <Header />

      <Row className='comm-main' justify='center'>
        <Col className='comm-left'>
          左侧
        </Col>
        <Col className='comm-center'>
          中间
        </Col>
        <Col className='comm-left'>
          右侧
        </Col>

      </Row>
    </div>
  );
}
