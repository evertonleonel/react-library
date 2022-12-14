import React from 'react';
import { ContainerTextArea, InputTextArea } from './FormStyles';

const TextArea = ({
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    label,
    name,
    ...props
}) => {
    return (
        <ContainerTextArea>
            <InputTextArea
                className="textArea"
                {...props}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <label htmlFor={name}>{label}</label>
        </ContainerTextArea>
    );
};

export default TextArea;
