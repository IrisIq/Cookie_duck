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
  const arrticalModalRef = useRef();
  useEffect(() => {
    const el2 = arrticalModalRef;
    console.log(el2);

    getArticals();
  }, []);

  // 获取所有文章
  const getArticals = async () => {
    const { data: resData } = await getAllArticals({});
    console.log(resData.data.list);
    // data.articalList = resData.data.list;
    console.log(resData);
    setArticalList(resData.data.list);
    console.log(articalList);
  };

  const getModelRef = () => {
    console.log(arrticalModalRef);
  };

  return (
    <div>
      <Button type="primary" onClick={getModelRef}>
        123
      </Button>
      <SearchComponent></SearchComponent>
      <TableComponent
        articalList={articalList}
        getModelRef={getModelRef}
      ></TableComponent>
      <ArticalModal ref={arrticalModalRef}></ArticalModal>
    </div>
  );
};

export default ArticalSetting;
