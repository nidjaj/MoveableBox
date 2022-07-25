import React from "react";
import './Button.css'
const Button = (props) => {
  return (
    <div onClick={props.onClick}>
      <button className="basic">Add Box</button>
    </div>
  );
};

export default Button;
