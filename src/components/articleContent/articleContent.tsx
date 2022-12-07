import { Card } from 'antd';
import { history } from 'umi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// interface ArticleContent {
//   value: any;
// }

const ArticleContent: React.FC = (props) => {
  const markdown = `Just a link: https://reactjs.com.`;

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
