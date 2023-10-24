import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import image from "../assets/signup.jpg";

const Signup = () => {
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
        <h1>Create an Account</h1>

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

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
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
              Signup{" "}
            </Button>
          </Form.Item>
        </Form>

        <Typography.Text>
          Already have an account? <a href="/login">Login</a>
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Signup;
