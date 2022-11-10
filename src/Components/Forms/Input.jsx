import React from 'react'
import {LoginInput, ErrorInput} from './FormStyles'

const Input = ({label, type, name, placeholder, value, onChange, error, onBlur}) => {
  return(
    <div>
      <label htmlFor={name}></label>
      <LoginInput 
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