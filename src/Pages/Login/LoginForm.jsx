import React from 'react'
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import {LinkSenhaPerdida } from './LoginStyles'
import {LoginLogo } from '../../Components/GlobalStyles/styles'
import Logo from '../../Assets/logo.svg'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')

  const navigate = useNavigate();
  
  function handleSubmit(event){
    event.preventDefault();
    navigate('home')
  }

  return (
    <section>
      <LoginLogo src={Logo} />
      <form onSubmit={handleSubmit}>
        <Input  label='Usuário' type='text' name='username' placeholder='E-mail' />
        <Input label='Senha' type='password' name='password' placeholder='Senha' />
       
        <LinkSenhaPerdida>Esqueci minha senha</LinkSenhaPerdida>
        <Button >Entrar</Button>
      </form>
    </section>
  )
}

export default LoginForm