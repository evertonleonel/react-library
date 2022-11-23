import React from 'react';
import LoginForm from './LoginForm';
import { LoginContent, LoginContainer } from './LoginStyles';

const Login = () => {
    return (
        <LoginContent>
            <LoginContainer>
                <LoginForm />
            </LoginContainer>
        </LoginContent>
    );
};

export default Login;
