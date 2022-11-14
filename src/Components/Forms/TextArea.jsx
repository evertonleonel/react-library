import React from 'react'
import {ErrorInput} from './FormStyles'

const TextArea = ({ type, name, placeholder, value, onChange, error, onBlur }) => {
  return(
    <>
      <textarea 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <ErrorInput>{error}</ErrorInput>}
    </>
    )
}

export default TextArea

