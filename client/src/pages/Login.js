import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import image from "../assets/login.jpg";

const Login = () => {
  return (
    <Row
      justify="center"
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="placeholder"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Col>

      <Col span={12} className="signup">
        <h1>Login into your Account</h1>

        <Form layout="vertical">
          <Form.Item
            label="User Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <Typography.Text>
          Don't have an Account? <a href="/signup">Register</a>
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Login;
