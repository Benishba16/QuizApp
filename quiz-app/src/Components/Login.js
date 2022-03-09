import React, { useState } from "react";
import { Form, Button, Input, Typography, Card, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Login() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [check, setCheck] = useState(false);
  const [valid, setValid] = useState(false);
  const [disable, setDisable] = useState(false);

  const onFinish = (values) => {
    console.log(values);

    let mail = localStorage.getItem("Email");
    let password = localStorage.getItem("Password");

    console.log(localStorage.getItem("Email"));
    console.log(localStorage.getItem("Password"));

    if (mail !== values.email || password !== values.password) {
      setCheck(!check);
    } else if (mail === values.email && password === values.password) {
      setValid(!valid);
      setDisable(!disable);
      // To use setInterval for 1500ms  and navigate to quiz page
      navigate("/quiz");
    }
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
    if (check) {
      setCheck(!check);
    }
  };

  return (
    <div>
      <Title className='login_title'>Login</Title>
      <Form
        size='large'
        name='basic'
        wrapperCol={{ span: 19 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
        form={form}
        className='login_form'
      >
        <Form.Item
          className='login_item'
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your mail",
            },
          ]}
        >
          <Input
            placeholder='Email'
            prefix={<MailOutlined className='site-form-item-icon' />}
          />
        </Form.Item>
        <Form.Item
          className='login_item'
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password
            placeholder='Password'
            prefix={<LockOutlined className='site-form-item-icon' />}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 13 }}>
          <div className='login_button'>
            <Button
              style={{ borderRadius: "10px" }}
              disabled={disable}
              size='large'
              type='primary'
              htmlType='submit'
            >
              Submit
            </Button>
            <Button
              style={{ borderRadius: "10px" }}
              size='large'
              htmlType='button'
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div>
        {check ? (
          <Text className='login_check' strong type='danger'>
            Check your email and password or create an account.
          </Text>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
