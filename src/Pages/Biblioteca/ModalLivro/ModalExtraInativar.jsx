import React from 'react'
import { ModalInativar, MotivoInativar } from './ModalLivro'

const ModalExtraInativar = () => {
  return (
    <ModalInativar>
      	<h2>Informações da inativação</h2>
        <MotivoInativar>
          <h3>Motivo</h3>
          <p>Falta de pagamento</p>
        </MotivoInativar>
    </ModalInativar>
  )
}

export default ModalExtraInativar