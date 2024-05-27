import React from 'react'
import './Button.css'

const Button = () => {
  return (
    <button {...props} className={'button ' + props.className}></button>
)
}

export default Button