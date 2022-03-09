import React, { useState } from "react";
import { Alert, Typography } from "antd";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function SignUp() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const [already, setAlready] = useState(false);
  const [start, setStart] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    if (values.email === localStorage.getItem("Email")) {
      setAlready(!already);
    } else {
      setStart(true);
      localStorage.setItem("Email", values.email);
      localStorage.setItem("Password", values.password);
      localStorage.setItem("Username", values.username);
      // To use setInterval for 1500ms  and navigate to quiz page
      navigate("/quiz");
    }
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed: ", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    if (already) {
      setAlready(!already);
    }
  };

  return (
    <div>
      <div>
        <Title className='signup_title'>SignUp</Title>
        <Form
          size='large'
          name='basic'
          wrapperCol={{ span: 19 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          form={form}
          className='signup_form'
        >
          <Form.Item
            className='signup_item'
            name='username'
            rules={[
              {
                required: true,
                message: "Please input your username!",
                required: true,
              },
              {
                pattern: /^\w[\w.\s]{2,18}\w$/,
                whitespace: true,
                message: "Enter valid username ",
              },
              { min: 5 },
            ]}
            hasFeedback
          >
            <Input
              placeholder='Username'
              prefix={<UserOutlined className='site-form-item-icon' />}
            />
          </Form.Item>
          <Form.Item
            className='signup_item'
            name='email'
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                // type: "email",
                pattern:
                  /^([a-zA-Z0-9])+.[a-z0-9]+@([a-zA-Z]{4,})+.([a-z]{2,3})+$/,
                message: "Enter valid mail id",
              },
            ]}
            hasFeedback
          >
            <Input
              placeholder='Email'
              prefix={<MailOutlined className='site-form-item-icon' />}
            />
          </Form.Item>
          <Form.Item
            className='signup_item'
            name='password'
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                message: "Please enter valid password",
              },
              { min: 6 },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder='Password'
              prefix={<LockOutlined className='site-form-item-icon' />}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
            <div className='signup_button'>
              <Button
                size='large'
                type='primary'
                htmlType='submit'
                style={{ borderRadius: "10px" }}
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
          {start ? (
            <div className='signup_message'>
              <Alert
                style={{ width: 300 }}
                showIcon
                type='success'
                message='Signup success! Redirecting you now...'
              />
            </div>
          ) : null}
        </div>
      </div>
      <div>
        {already ? (
          <Text className='signup_already_mail' type='danger' strong>
            Mail id is already exist!
          </Text>
        ) : null}
      </div>
    </div>
  );
}

export default SignUp;
