import React from 'react'
import BibliotecaLivros from './BibliotecaLivros'
import BibliotecaPesquisar from './BibliotecaPesquisar'
import { DivGaleria } from './BibliotecaStyles'

const BibliotecaGaleria = () => {
  return (
    <DivGaleria>
      <BibliotecaPesquisar />
      <BibliotecaLivros />
    </DivGaleria>
  )
}

export default BibliotecaGaleria