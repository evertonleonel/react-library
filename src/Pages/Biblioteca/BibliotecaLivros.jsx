import React, { useEffect } from 'react'
import { LivroDiv, LivroContainer} from './BibliotecaStyles'
import {LivroContext} from '../../Hooks/LivroContext'

const BibliotecaGalery = () => {
  const global = React.useContext(LivroContext);
  const livros = global.livros

  const loadLivros = async () => {
    await global.fetchLivro()
    return true
  }
 
  useEffect( () => {
    loadLivros()
  },[] )

  return (
    <LivroContainer >
        {livros && livros.map( (livro, index) => {
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