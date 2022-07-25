<<<<<<< HEAD
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
=======
import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div onClick={props.onClick}>
      <button className="Add-box">Add Box</button>
    </div>
  )
}

export default Button
>>>>>>> 6c0d3f7f6470d1dec635b313df40b7f55266820f
