import { Fragment } from 'react';
import IndexLayout from '@/components/layout/index';
import BlogCard from '@/components/globles/BlogCard';

const Artical: React.FC = () => {
  const left = () => <BlogCard></BlogCard>;

  return (
    <Fragment>
      <IndexLayout left={left} right={left} center={left}></IndexLayout>
    </Fragment>
  );
};

export default Artical;
