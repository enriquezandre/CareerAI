import React, { useState } from 'react';
import './InputButton.css'; // Import CSS file for styling

const InputButton = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <button className="gradient-button">
      <div className="input-button-content">
        <div className="input-button-left" onClick={handleDecrement}>-</div>
        <div className="input-button-number">{number}</div>
        <div className="input-button-right" onClick={handleIncrement}>+</div>
      </div>
    </button>
  );
};

export default InputButton;
