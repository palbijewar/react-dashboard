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
} from '@ant-design/icons';
import { Layout, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const {  Sider } = Layout;

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: <AppstoreOutlined />, path: '/dashboard' },
  { key: 'sales', label: 'Sales', icon: <BarChartOutlined />, path: '/sales' },
  { key: 'products', label: 'Products', icon: <CloudOutlined />, path: '/products' },
  { key: 'reports', label: 'Reports', icon: <ShopOutlined />, path: '/reports' },
  { key: 'customers', label: 'Customers', icon: <TeamOutlined />, path: '/customers' },
  { key: 'statistics', label: 'Statistics', icon: <UploadOutlined />, path: '/statistics' },
];

const Reports = () => {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <Sider style={{ backgroundColor: '#fff' }} width={250}> 
        <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <Avatar size={44} icon={<UserOutlined />} style={{ borderRadius: 8 }} />
          </div>
          <div style={{ textAlign: 'left', marginLeft: 10 }}>
            <p style={{ marginBottom: 4, color: 'purple', fontSize: 14, fontWeight: 'bold' }}>Jacob Jones</p>
            <p style={{ margin: 0, color: 'purple', fontSize: 12 }}>jacob@example.com</p> 
          </div>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['reports']} style={{ marginBottom: 10 }}> 
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path} style={{ color: 'purple' }}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ marginTop: 50, marginBottom: 20 }}> 
          <Menu theme="light" mode="inline">
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              <Link to="/settings" style={{ color: 'purple' }}>Settings</Link>
            </Menu.Item>
            <Menu.Item key="support" icon={<CustomerServiceOutlined />}>
              <Link to="/support" style={{ color: 'purple' }}>Support</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout" style={{backgroundColor: '#fff'}}>
      Reports
      </Layout>
    </Layout>
  );
};

export default Reports;
