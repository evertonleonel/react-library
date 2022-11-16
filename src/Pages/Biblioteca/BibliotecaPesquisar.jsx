import React from 'react'
import InputPadrão from '../../Components/Forms/InputPadrão'
import Button from '../../Components/Forms/Button'
import Lupa from '../../Assets/lupa.svg'
import { ImagemIcone, DivBuscar } from './BibliotecaStyles'
import BibliotecaFiltro from './BibliotecaFiltro'

const BibliotecaPesquisar = () => {
  return (
    <div style={{display: 'flex', flexWrap:'wrap'}}>
      <DivBuscar>
        <ImagemIcone src={Lupa} />
        <InputPadrão   
          style={{
            paddingLeft:'49px', 
            outline:'0', 
            border: '0', 
            font: 'italic normal normal 16px/21px Roboto'
          }}
          placeholder={'Pesquisar livro...'}
          />
        <Button 
          height={ '37px'} 
          style={
          { maxWidth: '82px',
            border: 'none', 
            fontWeight:'normal',
            marginRight: '8px'}}
          >Buscar</Button>
      </DivBuscar>
      
      <BibliotecaFiltro />
    </div>
  )
}

export default BibliotecaPesquisar