import React, { useEffect } from 'react'
import { LivroDiv, LivroContainer} from './BibliotecaStyles'
import {LivroContext} from '../../Hooks/LivroContext'

const BibliotecaGalery = ({setModalLivros}) => {
  const global = React.useContext(LivroContext);
  const allLivros = global.livros
  const loadLivros = global.loadLivros;
  const setLoadLivros = global.setLoadLivros;
 
  const buscarLivros = async () => {
    await global.fetchLivro();
    return true
  }
  
  useEffect( () => {
    buscarLivros()
    setLoadLivros(allLivros)
  },[] )

  useEffect( () => {
    setLoadLivros(allLivros)
  },[allLivros] )

  function handleClick(event){
    let livroSelecionado = event.currentTarget
    console.log(livroSelecionado)
    setModalLivros(livroSelecionado)
  }

  return (
    <LivroContainer  setModalLivros={setModalLivros}>
        {loadLivros &&  loadLivros.map( (livro, index) => {
          return (
            <LivroDiv  key={index} id={livro.id}  onClick={handleClick}  >
              <img src={livro.image} />
              <h2>{livro.tittle}</h2>
            </LivroDiv> 
          )
        })} 
    </LivroContainer>
  )
}

export default BibliotecaGalery