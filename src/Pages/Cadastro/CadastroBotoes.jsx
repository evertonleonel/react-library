import React from 'react'
import {DivBotoes} from './CadastroStyles'
import Button from '../../Components/Forms/Button'

const CadastroBotoes = () => {
  return (
    <DivBotoes >
    <Button cor={'#fff'} className='botoes' >Cancelar</Button>
    <Button type='submit' border={'none'} className='botoes'>Salvar</Button>
    </DivBotoes>
  )
}

export default CadastroBotoes