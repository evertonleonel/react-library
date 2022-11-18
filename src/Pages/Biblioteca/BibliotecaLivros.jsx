import React, { useEffect } from 'react'
import { LivroDiv, LivroContainer} from './BibliotecaStyles'
import {LivroContext} from '../../Hooks/LivroContext'

const BibliotecaGalery = () => {
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

  return (
    <LivroContainer >
        {loadLivros &&  loadLivros.map( (livro, index) => {
          return (
            <LivroDiv key={index} id={livro.id} >
              <img src={livro.image} />
              <h2>{livro.tittle}</h2>
            </LivroDiv> 
          )
        })} 
    </LivroContainer>
  )
}

export default BibliotecaGalery