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