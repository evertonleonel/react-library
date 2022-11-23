import React from 'react';
import { InputGeral, ErrorInput } from './FormStyles';

const InputPadrão = ({
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
        <>
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
            {error && <ErrorInput>{error}</ErrorInput>}
        </>
    );
};

export default InputPadrão;
