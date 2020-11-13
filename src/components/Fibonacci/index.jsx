import React, { useState } from "react";
import { Form, Row, Col, Button } from "antd";
import './fibonacci.scss';
import NumberInput from '../../helpers/form/NumberInput';

const Fibonacci = () => {
  const [fibonacciInputValue, setfibonacciInputValue] = useState(1);
  const [fibonacciSerie, setfibonacciSerie] = useState('');

  const changeFibonnaciValue = (value) => setfibonacciInputValue(value);

  const onSubmitFibonacciSerie = () => {
    const numbers = [];

    if (fibonacciInputValue === 1) numbers.push(1);
    else if (fibonacciInputValue === 2)
      numbers.push(1,1);   
    else {
      numbers.push(1,1);
      for (let i = 2; i < fibonacciInputValue; i++) {
        const currentValue = numbers[i - 2] + numbers[i - 1];
        numbers.push(currentValue);
      }
    }

    setfibonacciSerie(numbers.join(" - "));
  };

  return (
    <Row>
      <Col xs={24}>
        <h1>Fibonacci Serie</h1>
      </Col>
      <Col xs={24}>
        <Form onFinish={onSubmitFibonacciSerie}>
          <Row>
            <Col>
              <NumberInput value={fibonacciInputValue} onChange={changeFibonnaciValue} />
              <Button type="primary" htmlType="submit">Generate</Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col xs={24}>
        {fibonacciSerie && (
          <div>
            <h2>Fibonacci serie result:</h2>
            <p>{fibonacciSerie}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Fibonacci;
