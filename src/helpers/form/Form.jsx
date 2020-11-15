import React from "react";
import { Form, Row, Col, Button } from "antd";
import NumberInput from './NumberInput';

const FormComponent = ({ onFinish, onChange, value }) => {
  return (
    <Form onFinish={onFinish}>
      <Row>
        <Col>
          <NumberInput value={value} onChange={onChange} />
          <Button type="primary" htmlType="submit">Generate</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
