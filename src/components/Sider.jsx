import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {   AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    SettingOutlined,
    CustomerServiceOutlined} from '@ant-design/icons';

const { Sider } = Layout;

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: <AppstoreOutlined />, path: '/dashboard' },
  { key: 'sales', label: 'Sales', icon: <BarChartOutlined />, path: '/sales' },
  { key: 'products', label: 'Products', icon: <CloudOutlined />, path: '/products' },
  { key: 'reports', label: 'Reports', icon: <ShopOutlined />, path: '/reports' },
  { key: 'customers', label: 'Customers', icon: <TeamOutlined />, path: '/customers' },
  { key: 'statistics', label: 'Statistics', icon: <UploadOutlined />, path: '/statistics' },
];

const CommonSider = ({ selectedKey }) => {
  return (
    <Sider style={{ backgroundColor: '#fff' }} width={250}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Avatar size={48} icon={<UserOutlined />} style={{ borderRadius: 10, marginRight: 10, marginLeft: 10, marginTop: 12 }} />
        <div style={{ textAlign: 'left' }}>
          <p style={{ marginBottom: 4, color: 'purple', fontSize: 14, fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>Jacob Jones</p>
          <p style={{ margin: 0, color: 'purple', fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>jacob@example.com</p>
        </div>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={[selectedKey]} style={{ marginBottom: 10, marginTop: 50 }}>
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
  );
};

export default CommonSider;
