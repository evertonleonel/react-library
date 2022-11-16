import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { LivroDiv, LivroContainer, Image } from './BibliotecaStyles'
import foto from '../../Assets/Livros/livro01.png'

const BibliotecaGalery = () => {
  const [livros, setLivros] = React.useState(null)

  React.useEffect(() =>{
    
    async function fetchLivro (){
      const response = await fetch('http://localhost:5000/books');
      const json = await response.json();
      setLivros(json)
    }
    fetchLivro ()

    


  },[] )

  return (
    <LivroContainer id='10'>
        {livros && livros.map( (livro, index) => {
          return (
            <LivroDiv key={index} id={livro.id} >
              <Image src={'livro.image'} />
              <h2>{livro.tittle}</h2>
            </LivroDiv>
          )
        })}
    </LivroContainer>
  )
}

export default BibliotecaGalery