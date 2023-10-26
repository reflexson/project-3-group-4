import { Row, Col, Divider } from "antd";
import React from "react";

const Nav = () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <h1>Workout Tracker</h1>
        </Col>

        <Col span={12}></Col>
        <div span={6} className="links">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>
      </Row>
      <Divider
        style={{
          backgroundColor: "black",
          height: "5px",
          marginBottom: "0px",
        }}
      />
    </div>
  );
};

export default Nav;
