import React from "react";
import { InputNumber } from "antd";

const NumberInput = ({ value, onChange }) => (
  <InputNumber min={1} value={value} onChange={onChange} />
);

export default NumberInput;
