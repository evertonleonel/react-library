import React from 'react';
import { ContainerTextAreaModal, InputTextAreaModal } from './FormStyles';

const TextAreaModal = ({
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
        <ContainerTextAreaModal>
            <InputTextAreaModal
                className="textArea"
                {...props}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            <label htmlFor={name}>{label}</label>
        </ContainerTextAreaModal>
    );
};

export default TextAreaModal;
