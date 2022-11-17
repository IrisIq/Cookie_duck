import { useEffect, useState } from 'react';
import ArticalBox from '@/components/globles/ArticalBox';
import { useRouteMatch } from 'umi';
import { getAllArticals } from '@/api/api';
import { articlList, getArticalList } from '@/interfaces/interfaces';

interface classInterface {}

const Class: React.FC<classInterface> = () => {
  const router = useRouteMatch();
  // console.log(router);

  const [articalList, setArticalList] = useState<articlList>();
  // const [data, setDate] = useState({
  //   articalList: ,
  // });

  useEffect(() => {
    getArticals();
  }, []);

  const getArticals = async () => {
    const { data: resData }: any = await getAllArticals({});
    console.log(resData.data.list);
    // data.articalList = resData.data.list;
    // setArticalList([...resData.data.list]);

    console.log(articalList);
    // console.log(data);
  };

  return (
    <div className="content">
      {articalList.map((item: articlList) => {
        return <ArticalBox value={item} key={item.id}></ArticalBox>;
      })}
    </div>
  );
};

export default Class;
