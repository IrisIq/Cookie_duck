import React, { ReactNode, useState, useEffect } from 'react';
import { Card, Col, Row, Select, Form, Input, Button } from 'antd';
import { getAllArticals } from '@/api/api';
import SearchComponent from './Search';
import App from './Table';

const ArticalSetting: React.FC = () => {
  const [articalList, setArticalList] = useState([]);
  useEffect(() => {
    getArticals();
  }, []);

  const getArticals = async () => {
    const { data: resData } = await getAllArticals({});
    console.log(resData.data.list);
    // data.articalList = resData.data.list;
    console.log(resData);
    setArticalList(resData.data.list);

    console.log(articalList);
  };
  return (
    <div>
      <SearchComponent></SearchComponent>
      <App articalList={articalList}></App>
    </div>
  );
};

export default ArticalSetting;
