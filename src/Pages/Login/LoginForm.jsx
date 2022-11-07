import React from 'react'
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import {LoginLogo,LinkSenhaPerdida } from './LoginStyles'
import Logo from '../../Assets/logo.svg'

const LoginForm = () => {
  // const [username, setUsername] = React.useState('')
  // const [password, setPassword] = React.useState('')

  function handleSubmit(event){
    event.preventDefault();
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