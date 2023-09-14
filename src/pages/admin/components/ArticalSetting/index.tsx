import React, {
  ReactNode,
  useState,
  useEffect,
  useRef,
  createRef,
} from 'react';
import { Card, Col, Row, Select, Form, Input, Button } from 'antd';
import { getAllArticals } from '@/api/api';
import SearchComponent from './Search';
import TableComponent from './Table';
import ArticalModal from './ArticalModal';

const ArticalSetting: React.FC = () => {
  // 文章列表
  const [articalList, setArticalList] = useState([]);
  // 弹窗配置
  const [modalConfig, setmodalConfig] = useState({
    isModelShow: true,
    title: '新建文章',
    id: '',
  });
  // 表格配置 搜索配置
  const [tableConfig, setTableConfig] = useState({
    modalConfig,
    setmodalConfig,
  });

  const arrticalModalRef = useRef();
  useEffect(() => {
    const el2 = arrticalModalRef;
    console.log(el2);
    getArticals();
  }, []);

  const ArticalModalShow = () => {
    if (modalConfig.isModelShow) {
      return (
        <ArticalModal
          modalConfig={modalConfig}
          closeModal={closeModal}
        ></ArticalModal>
      );
    }
  };
  // 获取所有文章
  const getArticals = async () => {
    const { data: resData } = await getAllArticals({});
    console.log(resData.data.list);
    // data.articalList = resData.data.list;
    console.log(resData);
    setArticalList(resData.data.list);
    console.log(articalList);
  };

  const showModal = () => {
    const obj = modalConfig;
    obj.isModelShow = true;
    setmodalConfig({ ...obj });
  };

  const closeModal = () => {
    const obj = modalConfig;
    obj.isModelShow = false;
    setmodalConfig({ ...obj });
  };

  return (
    <div>
      <SearchComponent searchConfig={tableConfig}></SearchComponent>
      <TableComponent
        articalList={articalList}
        tableConfig={tableConfig}
        closeModal={closeModal}
      ></TableComponent>
      {/* <ArticalModal
        modalConfig={modalConfig}
        closeModal={closeModal}
      ></ArticalModal> */}
      {ArticalModalShow()}
    </div>
  );
};

export default ArticalSetting;
