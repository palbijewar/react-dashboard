import React from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Layout, Card } from 'antd';
import CommonSider from '../components/Sider';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
    <CommonSider selectedKey="dashboard" />
    <Layout className="site-layout" style={{ backgroundColor: '#fff' }}>
      <Header className="site-layout-background" style={{ height: 100, padding: '16px 24px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#26004d', fontSize: 35, fontWeight: 'bold', lineHeight: '1' }}>
          Welcome<br />
          Back Jacob!
        </div>
        <BellOutlined style={{ fontSize: 24, color: 'purple' }} />
      </Header>
        <Content style={{ margin: '0 16px', background: '#fff' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Card style={{ width: 400, height:150, background: '#8527b0', borderRadius:20 , color: 'white', marginBottom: 20, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)', marginRight: 20 }}>
                <p style={{ fontSize: 14, marginBottom: 0 }}>Total Clients</p>
                <p style={{ fontSize: 34, fontWeight: 'bold', marginTop: 0 }}>3,248</p>
              </Card>
              <Card style={{ width: 400,height:150, background: '#fff', borderRadius:20, color: '26004d', marginBottom: 20, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)', marginRight: 20 }}>
                <p style={{ fontSize: 14, marginBottom: 0 }}>Total Orders</p>
                <p style={{ fontSize: 34, fontWeight: 'bold', marginTop: 0, color: '#2f133b' }}>2,492</p>
              </Card>
              <Card style={{ width: 400,height:150, background: '#fff', borderRadius:20, color: '26004d', marginBottom: 20, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}>
                <p style={{ fontSize: 14, marginBottom: 0 }}>Total Revenue</p>
                <p style={{ fontSize: 34, fontWeight: 'bold', marginTop: 0 }}>5,742</p>
              </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
