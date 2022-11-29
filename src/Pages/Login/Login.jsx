import React from 'react';
import Head from '../../Components/Helper/Head';
import LoginForm from './LoginForm';
import { LoginContent, LoginContainer } from './LoginStyles';

const Login = () => {
    return (
        <>
            <Head title="Login" description="Página de Login" />
            <LoginContent>
                <LoginContainer>
                    <LoginForm />
                </LoginContainer>
            </LoginContent>
        </>
    );
};

export default Login;
