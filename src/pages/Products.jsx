import React from 'react';
import { Layout } from 'antd';
import CommonSider from '../components/Sider';

const { Content } = Layout;

const Products = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CommonSider selectedKey="products" />
      <Layout>
        <Content style={{ padding: '24px' }}>
          <div style={{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 48px)' }}>
            <h1>Products Content</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Products;
