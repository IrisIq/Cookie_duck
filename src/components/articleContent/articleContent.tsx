import React, { ReactNode, useState, useEffect } from 'react';
import { Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getOneArticals } from '@/api/api';

interface articleProps {
  id: any;
}
interface dataInterface {
  id: any;
}
const ArticleContent: React.FC<articleProps> = (props) => {
  const [artical, setArtical]: any = useState({});
  useEffect(() => {
    getArtical();
  }, []);

  const getArtical = async () => {
    const { data } = await getOneArticals(props.id);
    setArtical({ ...data.data });
    console.log(data);
  };
  return (
    <div className="artical-box">
      <Card hoverable>
        <h2 style={{ textAlign: 'center' }}>{artical.title}</h2>
        <h3 style={{ textAlign: 'center' }}>{artical.author}</h3>
      </Card>
      <Card
        hoverable
        style={{ height: '100%', marginTop: '10px', backgroundColor: 'red' }}
      >
        <div>这是文章</div>
        <ReactMarkdown children={artical.content} remarkPlugins={[remarkGfm]} />
      </Card>
    </div>
  );
};

export default ArticleContent;
