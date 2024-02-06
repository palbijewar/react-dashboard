import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://65b33fee770d43aba47976ef.mockapi.io/api/dash/users",
      { email: email, password: password }
    ).then(() => {
      history("/dashboard");
    });
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="logo">
          <img src="/dashlogo.jpg" alt="Dashboard Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
        </div>
        <p className="login-message">Log in to your account to continue</p>
        <div className="form-container">
          <Form
            name="basic"
            layout="vertical"
            style={{
              maxWidth: 450,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onSubmit={handleFormSubmit}
          >
            <Form.Item
              label={<span style={{ color: 'grey', fontSize: '14px' }}>Email</span>}
              name="email"
              rules={[
                {
                  message: 'Please enter your email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined style={{ marginRight: 8, color: 'grey' }} />} placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '4px', height: '40px' }} />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: 'grey', fontSize: '14px', float: 'right' }}>Password</span>}
              name="password"
              rules={[
                {
                  message: 'Please enter your password!',
                },
              ]}
              extra={
                <div style={{ textAlign: 'right', marginBottom: '8px' }}>
                  <a href="/" style={{ color: 'grey', fontSize: '12px' }}>Forgot Password?</a>
                </div>
              }
            >
              <Input.Password prefix={<LockOutlined style={{ marginRight: 8, color: 'grey' }} />} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '4px', height: '40px' }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button" onClick={handleFormSubmit} style={{ borderRadius: '4px', height: '40px', backgroundColor: 'blue' }}>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
