import React from 'react';
import { InputGeral, ErrorInput, ContaierInputPadrao } from './FormStyles';

const InputPadrao = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    onBlur,
    ...props
}) => {
    return (
        <ContaierInputPadrao>
            <InputGeral
                {...props}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <label htmlFor={name}>{label}</label>
        </ContaierInputPadrao>
    );
};

export default InputPadrao;
