import { Button, Modal, Form, Input, Switch } from 'antd';
import React, { useState, forwardRef, useEffect } from 'react';
import {
  addArtical,
  getAllArticals,
  getOneArticals,
  editArticals,
} from '@/api/api';
// import PubSub from 'pubsub-js';

const { TextArea } = Input;

interface ArticalModalProps {
  modalConfig: any;
  closeModal: any;
}

const ArticalModal: React.FC<ArticalModalProps> = (props) => {
  const { modalConfig, closeModal } = props;
  const [articalForm] = Form.useForm();

  const col = {
    label: { sm: 6, lg: 4, xl: 4, xxl: 4 },
    wrapper: { sm: 18, lg: 18, xl: 12, xxl: 10 },
  };
  useEffect(() => {
    console.log(modalConfig.title);

    // 编辑时 调获取详情接口
    if (modalConfig.title === '编辑') {
      getAllArtical(modalConfig.id);
    }
  }, []);

  // 点击提交
  const handleOk = async () => {
    // closeModal();
    const articalList = await articalForm.validateFields().catch((e) => {
      console.log(e);
    });
    console.log(articalList);

    if (!articalList) {
      return false;
    }
    modalConfig.title === '新建文章'
      ? addNewArtical(articalList)
      : editArtical(articalList);
  };

  // 新建
  const addNewArtical = async (list: any) => {
    // list.author='wyx'
    // list.img_url=''
    // list.type=''
    list.is_show = !list.is_show ? false : true;
    console.log(list);

    const res = await addArtical(list);
    console.log(res);

    closeModal();
  };
  // 修改
  const editArtical = async (list: any) => {
    console.log(list);
    const res = await editArticals({ id: modalConfig.id, ...list });
    console.log(res);

    closeModal();
  };
  const handleCancel = () => {
    articalForm.resetFields();
    closeModal();
  };

  // 获取文章
  const getAllArtical = async (id: number) => {
    const res = await getOneArticals(id);
    console.log(res);

    if (!res.data.success) {
      return false;
    }
    articalForm.setFieldsValue(res.data.data);
    // articalForm.setFieldValue('is_show', 11111111);
    console.log(res);
  };

  return (
    <>
      <Modal
        width={'50%'}
        title={modalConfig.title}
        open={modalConfig.isModelShow}
        cancelText={'关闭'}
        okText={'提交'}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form
          name="basic"
          labelCol={col.label}
          wrapperCol={col.wrapper}
          initialValues={{}}
          form={articalForm}
          autoComplete="off"
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="作者"
            name="author"
            rules={[{ required: true, message: '请输入文章标题!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容!' }]}
          >
            <TextArea rows={4} placeholder="内容" />
          </Form.Item>
          <Form.Item label="是否显示" name="is_show" valuePropName="checked">
            <Switch checkedChildren="显示" unCheckedChildren="不显示" />
          </Form.Item>
          <Form.Item label="类型"></Form.Item>
          <Form.Item label="封面"></Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ArticalModal;
