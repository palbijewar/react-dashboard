import React from 'react';
import { Layout } from 'antd';
import CommonSider from '../components/Sider';

const { Content } = Layout;

const Support = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CommonSider selectedKey="support" />
      <Layout>
        <Content style={{ padding: '24px' }}>
          <div style={{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 48px)' }}>
            <h1>Support Content</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Support;
