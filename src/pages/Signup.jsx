import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'; 
import './App.css';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">
          <img src="/dashlogo.jpg" alt="Dashboard Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
        <p className="login-message">Sign up to your account to continue</p>
        <div className="form-container">
          <Form
            name="basic"
            layout="vertical"
            style={{
              maxWidth: 450,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
  <Form.Item
              label={<span style={{ color: 'grey', fontSize: '14px', float: 'right' }}>Username</span>}
              name="username"
              rules={[
                {
                  message: 'Please set your username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined style={{ marginRight: 8, color: 'grey' }} />}   placeholder="Set your username" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '4px', height: '40px' }} />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'grey', fontSize: '14px', float: 'right' }}>Email</span>}
              name="email"
              rules={[
                {
                  message: 'Please set your email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined style={{ marginRight: 8, color: 'grey' }} />} placeholder="Set your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '4px', height: '40px' }} />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'grey', fontSize: '14px', float: 'right' }}>Password</span>}
              name="password"
              rules={[
                {
                  message: 'Please set your password!',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined style={{ marginRight: 8, color: 'grey' }} />}  placeholder="Set your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '4px', height: '40px' }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button" href='/login' style={{ borderRadius: '4px', height: '40px', backgroundColor: 'blue' }}>
                Sign Up
              </Button>
            </Form.Item>
            <p>Already a user? <a href='/login' >Login</a></p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
