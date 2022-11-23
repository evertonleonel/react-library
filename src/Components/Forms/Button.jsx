import React from 'react';
import { LoginButton } from './FormStyles';

const Button = ({ children, ...props }) => {
    return <LoginButton {...props}>{children}</LoginButton>;
};

export default Button;
