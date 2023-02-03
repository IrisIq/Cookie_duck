import React, { ReactNode, useState } from 'react';
import type { MenuProps } from 'antd';
import { Card } from 'antd';

const ArticalText: React.FC = () => {
  return (
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: '100%', height: '100%' }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default ArticalText;
