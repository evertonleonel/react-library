import React from 'react'
import {Modal} from '../../../Pages/Biblioteca/ModalLivro/ModalLivro'
import Button from '../../Forms/Button'
import InputPadrão from '../../Forms/InputPadrão'
import ModalBotaoFechar from '../ModalBotaoFechar'
import { EmprestarLivro } from './ModalEmprestar'
import IconeLivro from '../../../Assets/icone_livro.png'


const ModalEmprestarLivro = () => {
  return (
    <Modal>
      <EmprestarLivro>
        <h3>Informe os dados do aluno antes de continuar</h3>
        <form>
          <InputPadrão type="text" placeholder='Nome do aluno' />
          <InputPadrão type="text" placeholder='Turma' />
          <InputPadrão type="date"/>
          <InputPadrão type="date"/>
        </form>
        <div style={{width: '272px', alignSelf: 'flex-end',}}>
          <Button style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'12px'}}>
                <img src={IconeLivro} alt="Icone do botão Emprestar / Devolver" />
                Emprestar
          </Button>
        </div>
        <ModalBotaoFechar />
      </EmprestarLivro>
    </Modal>
  )
}

export default ModalEmprestarLivro