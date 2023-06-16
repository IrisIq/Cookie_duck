import React, { ReactNode, useState } from 'react';
import { Card, Col, Row, Select, Form, Input, Button } from 'antd';

const SearchComponent: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Form>
        <Row>
          <Col span={6}>
            <Form.Item label="文章名称" name="articalName">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="分类" name="username">
              <Select
                // style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>1x</Col>
          <Col span={6}>
            <Button type="primary">搜索</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
