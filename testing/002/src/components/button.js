import React from 'react'

const Button = (props) => (
  <button onClick={props.action}
          disabled={props.disabled}>
    {props.label}
  </button>
)

export default Button
