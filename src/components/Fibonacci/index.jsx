import React, { useState } from "react";
import { Row, Col } from "antd";
import './fibonacci.scss';
import Form from '../../helpers/form/Form';

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
        <p>Please insert a number of digits that you what to see:</p>
      </Col>
      <Col xs={24}>
        <Form onFinish={onSubmitFibonacciSerie} value={fibonacciInputValue} onChange={changeFibonnaciValue}  />
      </Col>
      <Col xs={24}>
        {fibonacciSerie && (
          <div>
            <h2>Fibonacci serie result:</h2>
            <p className="fibonacci-result">{fibonacciSerie}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Fibonacci;
