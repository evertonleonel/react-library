import React from 'react'
import { InputTextArea } from './FormStyles'

const TextArea = ({ type, placeholder, value, onChange, onBlur }) => {
  return(
    <>
      <InputTextArea
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
    </>
    )
}

export default TextArea

