import React from 'react'
import { ContainerMain } from '../../Components/GlobalStyles/styles'
import Header from '../../Components/Header/Header'
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar'
import EmprestimoHistorico from './EmprestimoHistorico'

const Emprestimo = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <LinkVoltar pagina='Histórico de Emprétimos' />
        <EmprestimoHistorico />
      </ContainerMain>
    </>
  )
}

export default Emprestimo