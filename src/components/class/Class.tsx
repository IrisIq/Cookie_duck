import { useEffect, useState } from 'react';
import ArticalBox from '@/components/globles/ArticalBox';
import { useRouteMatch } from 'umi';

import { getAllArticals } from '@/api/api';

const Class: React.FC = () => {
  const router = useRouteMatch();
  console.log(router);

  const getArticals = async () => {
    const res = await getAllArticals();
    console.log(res);
  };

  useEffect(() => {
    getArticals();
    return () => {
      console.log(2);
    };
  });
  return (
    <div className="content">
      <ArticalBox></ArticalBox>

      <ArticalBox></ArticalBox>

      <ArticalBox></ArticalBox>
    </div>
  );
};

export default Class;
