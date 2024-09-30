import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const ContainerComponent = () => {
  const [counter, setCounter] = useState(1);
  function handleIncrease() {
    setCounter(counter + 1);
  }

  function handleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
     <MyButton
        className="btn btn-success"
        type="button"
        label="increase"
        onClick={handleIncrease}
      />
      <CounterValue counter={counter} />
      <MyButton type="button" label="decrease"  onClick={handleDecrease} />
      
    </div>
  );
};
function CounterValue({ counter }) {
  return <span>{counter}</span>;
}
function MyButton({ onClick, label }) {
  return (
    <span
      className={label === "increase" ? "btn btn-success" : "btn btn-danger"}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

export default ContainerComponent;
