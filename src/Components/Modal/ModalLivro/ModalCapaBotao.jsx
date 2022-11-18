import React from 'react'
import Button from '../../Forms/Button'
import { ImagemLivro } from './ModalPrincipal'


const ModalCapaBotao = ({src, props}) => {
  return (
    <div>
        <ImagemLivro src={src} />
        <Button>{props}</Button>
    </div>
  )
}

export default ModalCapaBotao