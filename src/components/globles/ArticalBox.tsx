import { Card } from 'antd';
import '@/static/style/components/ArticalBox.less';
// import img from '../static/img/1.jpg';

export default function Class() {
  return (
    <div className="artical-box">
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
}
