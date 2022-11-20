import React from 'react'
import { ContainerMain } from '../../Components/GlobalStyles/styles'
import Header from '../../Components/Header/Header'
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar'
import BibliotecaGaleria from './BibliotecaGaleria'


const Biblioteca = () => {
 
  return (
    <>
      <Header />
      <ContainerMain>
        <LinkVoltar pagina='Biblioteca' />
          <BibliotecaGaleria />
      </ContainerMain>
    </>
  )
}

export default Biblioteca