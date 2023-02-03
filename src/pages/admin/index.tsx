import { useEffect, useState, Fragment } from 'react';

import AdminLayout from '@/components/layout/admin';
import Header from '@/components/admin/Header';
import AdminMenu from '@/components/admin/AdminMenu';

const Admin: React.FC = (props) => {
  const center = () => <Header></Header>;
  const left = () => <AdminMenu></AdminMenu>;
  const content = () => props.children;
  return (
    <Fragment>
      <AdminLayout center={center} left={left} content={content}></AdminLayout>
      {/* <div> {props.children} </div> */}
    </Fragment>
  );
};

export default Admin;
1;
