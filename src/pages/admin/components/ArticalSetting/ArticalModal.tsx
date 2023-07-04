import { Button, Modal, Form, Input } from 'antd';
import React, { useState, forwardRef } from 'react';
import { addArtical } from '@/api/api';
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

  // 点击提交
  const handleOk = async () => {
    // closeModal();
    const articalList = await articalForm.validateFields().catch((e) => {
      console.log(e);
    });
    if (!articalList) {
      return false;
    }
    modalConfig.title === '新建文章'
      ? addNewArtical(articalList)
      : editArtical(articalList);
  };

  // 新建
  const addNewArtical = async (list: any) => {
    console.log(list);
    const res = await addArtical(list);
    console.log(res);

    closeModal();
  };
  // 修改
  const editArtical = (list: any) => {
    closeModal();
  };
  const handleCancel = () => {
    closeModal();
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
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容!' }]}
          >
            <TextArea rows={4} placeholder="内容" />
          </Form.Item>

          <Form.Item label="类型"></Form.Item>
          <Form.Item label="封面"></Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ArticalModal;
