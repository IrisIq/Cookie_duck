import { Card } from 'antd';
import { history } from 'umi';

import '@/static/style/components/ArticalBox.less';
// import img from '../static/img/1.jpg';
interface classProps {
  value: any;
}

const Class: React.FC<classProps> = (props) => {
  console.log(props);
  const { value } = props;
  const goUrl = () => {
    history.push('/artical/' + value.id);
  };
  return (
    <div className="artical-box" onClick={goUrl}>
      <Card hoverable>
        <div className="artical-content">
          <div className="artical-img"></div>

          <div className="artical-word">
            <div className="word-title">{value.title} </div>
            <div className="word-others">
              <div className="others-time">{value.create_time} </div>
              <div className="others-classification"> 分类</div>
              <div className="others-auther">{value.author} </div>
            </div>
            <div className="word-introduce">{value.content}</div>
            <div className="tag">这是一堆tag</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Class;
