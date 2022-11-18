import React, { useEffect } from 'react'
import InputPadrão from '../../Components/Forms/InputPadrão'
import Button from '../../Components/Forms/Button'
import Lupa from '../../Assets/lupa.svg'
import { ImagemIcone, DivBuscar } from './BibliotecaStyles'
import BibliotecaFiltro from './BibliotecaFiltro'
import {LivroContext} from '../../Hooks/LivroContext'

const BibliotecaPesquisar = () => {
  const [inputPesquisar, setInputPesquisar] = React.useState('');
  const [selectFiltro, setSelectFiltro] = React.useState('');
  const global = React.useContext(LivroContext);
  const livros = global.livros
  const setLivros = global.setLivros;
  const [loading, setLoading] = React.useState(false)

  const loadLivros = async () => {
    await global.fetchLivro()
    setLoading(true)
  }

  // useEffect( ()=> {
  //   // setLoading(false)
  //   loadLivros()
  //   // filtrarLivros()
  // }, [])
  
  function inputChange(event){
    const {value} = event.target;
    setInputPesquisar(value)
  }

  function filtroChange(event){
    const {value} = event.target;
    setSelectFiltro(value)
  }
  
  const filtrarLivros = async (pesquisa, tipo) => {
    const livrosFiltrados = livros.filter((livro) => (
      livro[tipo].toLowerCase().indexOf(pesquisa.toLowerCase()) > -1
    ));
   
    console.log(livrosFiltrados)
  
    setLivros(livrosFiltrados);
  };

  function buscarFiltros(){
    filtrarLivros(inputPesquisar, selectFiltro);
  }

  return (
    <div style={{display: 'flex', flexWrap:'wrap', margin:'0 auto'}}>
      <DivBuscar>
        <ImagemIcone src={Lupa} />
        <InputPadrão   
          style={{
            paddingLeft:'49px', 
            outline:'0', 
            border: '0', 
            font: 'italic normal normal 16px/21px Roboto'
          }}
          onChange={inputChange}
          placeholder={'Pesquisar livro...'}
          />
        <Button 
          onClick={buscarFiltros}
          height={ '37px'} 
          style={
          { maxWidth: '82px',
            border: 'none', 
            fontWeight:'normal',
            marginRight: '8px'}}
          >Buscar</Button>
      </DivBuscar>
      
      <BibliotecaFiltro onChange={filtroChange} />
    </div>
  )
}

export default BibliotecaPesquisar