import React, { ReactNode, useState, useEffect } from 'react';
import { Card } from 'antd';
import { useParams } from 'umi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface articleProps {
  // value: any;
  // route: any;
}

const ArticleContent: React.FC<articleProps> = (props) => {
  const markdown = `Just a link: https://reactjs.com.`;
  useEffect(() => {
    getArtical();
  }, []);

  const getArtical = () => {
    // const value = useParams();
    // console.log(value);
  };
  return (
    <div className="artical-box">
      <Card hoverable>
        <div>这是文章</div>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
      </Card>
    </div>
  );
};

export default ArticleContent;
