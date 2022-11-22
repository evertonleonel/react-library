import React  from 'react'
import {LoginLogo } from '../../Components/GlobalStyles/styles'
import {LinkSenhaPerdida } from './LoginStyles'
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import Logo from '../../Assets/logo.svg';
import useForm from '../../Hooks/useForm';
import { GET_LOGS} from '../../Services/api';
import { useNavigate } from 'react-router-dom';
import {LivroContext} from '../../Hooks/LivroContext'
import { v4 as uuidv4} from "uuid"

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const navigate = useNavigate()
  const global = React.useContext(LivroContext);
  const livros = global.livros
  const setLivros = global.setLivros
 

  const buscarLivros = async () => {
    await global.fetchLivro();
    return true
  }
  
  const livroNOVO = {};
  React.useEffect( () => {
    buscarLivros()
    const id = {
      id: uuidv4()
    }


    if(livros){
      const livrosID = livros.map(livro => {
        return livroNOVO = {...livro, ...id}
      })
      console.log(livrosID, 'sou id')
      console.log(livros)
      console.log(livroNOVO)
    }
    
  },[] )

  async function handleSubmit(event){
    event.preventDefault();
   
    if(username.validate() && password.validate()){
      const {url, options} = GET_LOGS({ 
        username:username.value, 
        password:password.value 
      })

      const response = await fetch(url,options);
      const json = await response.json();
      const login =json;
      
      const found = login.find((login) => 
        login.email === username.value && login.password === password.value);

      if(found){
        window.localStorage.setItem('users', username.value)
        navigate('/home')
      
      }else{
        alert('Email ou senha incorretos');
      }
    }
  }

  return (
    <section>
      <LoginLogo src={Logo} />
      <form onSubmit={handleSubmit}>
        <Input
          label='Email'
          type='text' 
          name='email' 
          placeholder='E-mail'
          {...username}
         />
        <Input 
          label='Senha' 
          type='password' 
          name='password' 
          placeholder='Senha'
          {...password}
        />
        <LinkSenhaPerdida>Esqueci minha senha</LinkSenhaPerdida>
        <Button border={'none'} >ENTRAR</Button>
      </form>
    </section>
  )
}

export default LoginForm
