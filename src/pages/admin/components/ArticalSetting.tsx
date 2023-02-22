import React, { ReactNode, useState } from 'react';
import { Card, Col, Row, MenuProps, Form, Input, Button } from 'antd';

const ArticalSetting: React.FC = () => {
  return (
    <Card style={{ width: '100%' }}>
      <div>
        <Form>
          <Row>
            <Col span={6}>
              <Form.Item
                label="文章名称"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>分类</Col>
            <Col span={6}>1x</Col>
            <Col span={6}>
              <Button type="primary">Primary Button</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Card>
  );
};

export default ArticalSetting;
