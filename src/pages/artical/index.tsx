import { Fragment } from 'react';
import IndexLayout from '@/components/layout/index';
import BlogCard from '@/components/globles/BlogCard';
import ArticleContent from '@/components/articleContent/articleContent';
const Artical: React.FC = () => {
  const left = () => <BlogCard></BlogCard>;
  const top = () => <BlogCard> </BlogCard>;

  const center = () => <ArticleContent></ArticleContent>;

  return (
    <Fragment>
      <IndexLayout left={left} right={left} center={center}></IndexLayout>
    </Fragment>
  );
};

export default Artical;
