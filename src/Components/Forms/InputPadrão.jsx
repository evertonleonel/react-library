import React from 'react'
import {InputGeral, ErrorInput} from './FormStyles'

const InputPadrão = ({ type, name, placeholder, value, onChange, error, onBlur }) => {
  return(
    <div>
      <label htmlFor={name}></label>
      <InputGeral 
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

export default InputPadrão