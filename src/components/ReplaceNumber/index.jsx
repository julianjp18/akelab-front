import React, { useState } from "react";
import { Row, Col } from "antd";
import './replaceNumber.scss';
import Form from '../../helpers/form/Form';

const AKE_WORD = "AKE";
const LAB_WORD = "LAB";

const ReplaceNumber = () => {
  const [inputValue, setInputValue] = useState(1);
  const [sequence, setSequence] = useState('');

  const changeInputValue = (value) => setInputValue(value);

  const isMultiple = (x, y) => {
    return Math.round(x / y) / (1 / y) === x;
  }

  const getCorrectValue = (i) => {
    if (isMultiple(i, 3) && isMultiple(i, 5)) return AKE_WORD+LAB_WORD;
    else if (isMultiple(i, 3)) return AKE_WORD;
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
        <h1>Replace an specific number for AKE, LAB and AKELAB words</h1>
        <p>Please insert a number of digits that you what to see:</p>
      </Col>
      <Col xs={24}>
        <Form onFinish={onSubmitSequence} value={inputValue} onChange={changeInputValue}  />
      </Col>
      <Col xs={24}>
        {sequence && (
          <div>
            <h2>Serie result:</h2>
            <p className="sequence-result">{sequence}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ReplaceNumber;
