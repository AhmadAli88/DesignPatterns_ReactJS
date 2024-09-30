import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const RenderLabel = () => {
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
        type="button"
        // label="decrease"
        renderLabel={function (k) {
          return (
            <div>
              <h4>My Custom label to increase {k}</h4>
            </div>
          );
        }}
        onClick={handleIncrease}
      />
      <CounterValue counter={counter} />
      <MyButton
        className="btn btn-success"
        type="button"
        // label="increase"
        renderLabel={function (n) {
          return (
            <div>
              <h4>My Custom label to decrease {n}</h4>
            </div>
           );
        }}
        onClick={handleDecrease}
      />
    </div>
  );
};
function CounterValue({ counter }) {
  return <span>{counter}</span>;
}
function MyButton({ onClick, renderLabel, variant }) {
  const number= 9;
  return (
    <span
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {renderLabel(number)}
    </span>
  );
}

export default RenderLabel;
