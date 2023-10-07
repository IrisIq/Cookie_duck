import { Fragment } from 'react';
import IndexLayout from '@/components/layout/index';
import BlogCard from '@/components/globles/BlogCard';
import ArticleContent from '@/components/articleContent/articleContent';
import { useParams } from 'umi';

const Artical: React.FC = (props) => {
  const left = () => <BlogCard></BlogCard>;
  const top = () => <BlogCard> </BlogCard>;

  const center = () => <ArticleContent></ArticleContent>;
  console.log(useParams());

  return (
    <Fragment>
      <IndexLayout left={left} right={left} center={center}></IndexLayout>
    </Fragment>
  );
};

export default Artical;
