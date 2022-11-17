import { Card } from 'antd';
import { history } from 'umi';

import '@/static/style/components/ArticalBox.less';
// import img from '../static/img/1.jpg';
interface classProps {
  value: any;
}

const Class: React.FC<classProps> = (props) => {
  console.log(props);

  const goUrl = () => {
    history.push('/artical/1');
  };
  return (
    <div className="artical-box" onClick={goUrl}>
      <Card hoverable>
        <div className="artical-content">
          <div className="artical-img"></div>

          <div className="artical-word">
            <div className="word-title">这是一个标题</div>
            <div className="word-others">
              <div className="others-time">2022-09-09</div>
              <div className="others-classification"> 分类</div>
              <div className="others-auther">作者</div>
            </div>
            <div className="word-introduce">
              这是文章简介？？？这是文章2131111s简介？？？这是文章简介？？？这是文章简介？？？这是文章简介？？？这是文章简介？？？
            </div>
            <div className="tag">这是一堆tag</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Class;
