import React, { ReactNode, useState } from 'react';
import { Card, Col, Row, Select, Form, Input, Button } from 'antd';

interface SerarchProps {
  searchConfig: any;
}
const SearchComponent: React.FC<SerarchProps> = (props) => {
  const { searchConfig } = props;
  const [title, setTitle] = useState('');

  // 分类发生改变
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // title输入框发生改变
  const titleChange = (e: any) => {
    console.log(e.nativeEvent.target.value);
    setTitle(e.nativeEvent.target.value);
    console.log(title);
  };

  const btnClick = () => {};

  const addArtical = () => {
    const obj = searchConfig.modalConfig;
    obj.title = '新增';
    obj.isModelShow = true;
    searchConfig.setmodalConfig({ ...obj });
  };
  return (
    <div>
      <Form>
        <Row>
          <Col span={6}>
            <Form.Item label="文章名称" name="articalName">
              <Input onChange={titleChange} />
            </Form.Item>
          </Col>
          {/* TODO:需要接入数据字典 */}
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
            <Button type="primary" onClick={btnClick}>
              搜索
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: '10px' }}
              onClick={addArtical}
            >
              新增
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchComponent;
