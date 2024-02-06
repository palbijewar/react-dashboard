import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: <AppstoreOutlined />, path: '/dashboard' },
  { key: 'sales', label: 'Sales', icon: <BarChartOutlined />, path: '/sales' },
  { key: 'products', label: 'Products', icon: <CloudOutlined />, path: '/products' },
  { key: 'reports', label: 'Reports', icon: <ShopOutlined />, path: '/reports' },
  { key: 'customers', label: 'Customers', icon: <TeamOutlined />, path: '/customers' },
  { key: 'statistics', label: 'Statistics', icon: <UploadOutlined />, path: '/statistics' },
];

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Sider style={{ backgroundColor: '#fff' }} width={250}> 
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Avatar size={48} icon={<UserOutlined />} style={{ borderRadius: 10, marginRight: 10, marginLeft: 10, marginTop: 12 }} />
          <div style={{ textAlign: 'left' }}>
            <p style={{ marginBottom: 4, color: 'purple', fontSize: 14, fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>Jacob Jones</p>
            <p style={{ margin: 0, color: 'purple', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>jacob@example.com</p> 
          </div>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['dashboard']} style={{ marginBottom: 10, marginTop: 50 }}> 
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path} style={{ color: 'purple', fontWeight: 'bold' }}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ marginTop: 100, marginBottom: 20 }}> 
          <Menu theme="light" mode="inline">
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              <Link to="/settings" style={{ color: 'purple', fontWeight: 'bold' }}>Settings</Link>
            </Menu.Item>
            <Menu.Item key="support" icon={<CustomerServiceOutlined />}>
              <Link to="/support" style={{ color: 'purple', fontWeight: 'bold' }}>Support</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: '#fff' }}>
      <Header className="site-layout-background" style={{ height:100,padding: '16px 24px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
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
