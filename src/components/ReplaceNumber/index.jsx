import React, { useState } from "react";
import { Form, Row, Col, Button } from "antd";
import './replaceNumber.scss';
import NumberInput from '../../helpers/form/NumberInput';

const AKA_WORD = "AKA";
const LAB_WORD = "LAB";

const ReplaceNumber = () => {
  const [inputValue, setInputValue] = useState(1);
  const [sequence, setSequence] = useState('');

  const changeInputValue = (value) => setInputValue(value);

  const isMultiple = (x, y) => {
    return Math.round(x / y) / (1 / y) === x;
  }

  const getCorrectValue = (i) => {
    if (isMultiple(i, 3) && isMultiple(i, 5)) return `${AKA_WORD}${LAB_WORD}`;
    else if (isMultiple(i, 3)) return AKA_WORD;
    else if (isMultiple(i, 5)) return LAB_WORD;
    else return i;
  };

  const onSubmitSequence = () => {
    const numbers = [1];

    for (let i = 2; i <= inputValue; i++) {
      numbers.push(getCorrectValue(i));
    }

    setSequence(numbers.join(" - "));
  };

  return (
    <Row>
      <Col xs={24}>
        <h1>Replace an specific number for AKALAB word</h1>
      </Col>
      <Col xs={24}>
        <Form onFinish={onSubmitSequence}>
          <Row>
            <Col>
              <NumberInput value={inputValue} onChange={changeInputValue} />
              <Button type="primary" htmlType="submit">Generate</Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col xs={24}>
        {sequence && (
          <div>
            <h2>Serie result:</h2>
            <p>{sequence}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ReplaceNumber;
