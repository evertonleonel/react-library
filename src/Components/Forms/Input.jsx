import React from 'react'
import {LoginInput} from './FormStyles'

const Input = ({label, type, name, placeholder}) => {
  return(
    <div>
      <label htmlFor={name}></label>
      <LoginInput id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input