import React from 'react'
import {LoginInput, ErrorInput} from './FormStyles'

const Input = ({ type, name, placeholder, value, onChange, error, onBlur, ...props }) => {
  return(
    <div>
      <label htmlFor={name}></label>
      <LoginInput {...props}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <ErrorInput>{error}</ErrorInput>}
    </div>
  )
}

export default Input