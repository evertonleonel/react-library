import React from 'react';
import { LoginInput, ErrorInput, InputLoginContainer } from './FormStyles';

const Input = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    onBlur,
    src,
    ...props
}) => {
    return (
        <InputLoginContainer>
            <label htmlFor={name}></label>
            <LoginInput
                {...props}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <span>
                <img src={src} />
            </span>
            {error && <ErrorInput>{error}</ErrorInput>}
        </InputLoginContainer>
    );
};

export default Input;
