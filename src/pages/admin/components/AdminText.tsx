import React, { ReactNode, useState } from 'react';
import type { MenuProps } from 'antd';
import { Card } from 'antd';

const ArticalText: React.FC = () => {
  return (
    <Card style={{ width: '100%', height: '100%' }}>
      <p>这是鸭鸭饼饼株式会社后台系统</p>
      <p>Card content</p>
    </Card>
  );
};

export default ArticalText;
