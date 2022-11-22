import React from 'react'
import {DivBotoes} from './CadastroStyles'
import Button from '../../Components/Forms/Button'
import { useNavigate } from 'react-router-dom';

const CadastroBotoes = () => {
  const navigate = useNavigate()
  return (
    <DivBotoes >
      <Button onClick={() => navigate('/home')} cor={'#fff'} className='botoes'  >Cancelar</Button>
      <Button type='submit' border={'none'}   className='botoes'>Salvar</Button>
      </DivBotoes>
  )
}

export default CadastroBotoes