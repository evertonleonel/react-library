import React from 'react'
import {Modal} from '../../../Pages/Biblioteca/ModalLivro/ModalLivro'
import { InativarLivro } from './ModalInativar'
import ModalBotaoFechar from '../ModalBotaoFechar'
import Button from '../../Forms/Button'

const ModalInativarLivro = () => {
  return (
    <Modal> 
      <InativarLivro>
        <h2>Inativar Livro</h2>
        <form action="#" method='post'>
          <div>
            <textarea placeholder='Descrição' />
          </div>
           <Button style={{
            color:'#ED5E5E',
            border: '1px solid #ed5e5e',
            backgroundColor:'#fff',
            alignSelf: 'flex-end',
            fontSize:'16px',
            maxWidth: '101px',
            textTransform: 'none',
           }}>
            Inativar
          </Button>
        </form>
       <ModalBotaoFechar />
      </InativarLivro>
    </Modal>
  )
}

export default ModalInativarLivro