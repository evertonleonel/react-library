import React from 'react'
import TextArea from '../../Components/Forms/TextArea'
import { InputGeral } from '../../Components/Forms/FormStyles'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { BOOKS_POST} from '../../Services/api'
import {InputContainer, NovoLivro} from './CadastroStyles'
import CadastroImagem from './CadastroImagem'
import CadastroBotoes from './CadastroBotoes'
import {converterEmBase64} from '../../Services/api'
import { v4 as uuidv4} from "uuid"


const CadastroDados = () => {
  const titulo = useForm()
  const autor = useForm()
  const genero = useForm()
  const sinopse = useForm()
  const dataEntrada = useForm()
  const [img, setImg] = React.useState('');
  const {request} = useFetch()

  function handleSubmit(event){
    event.preventDefault()

    const {url, options} = BOOKS_POST({
      id: uuidv4(),
      tittle:titulo.value,
      author:autor.value,
      genre: genero.value,
      systemEntryDate: dataEntrada.value,
      synopsis: sinopse.value,
      image: img
     })
    request( url, options)
    
     async function verlivros(){
      const response = await fetch('http://localhost:5000/books')
      const json = await response.json()
    }
    verlivros()
  }

  async function handleImgChange({target}) {
    const raw =  target.files[0]
    const  baseImg = await converterEmBase64(raw)
    setImg(baseImg)
  }

  return (
    <section>
        <NovoLivro onSubmit={handleSubmit}>
          <CadastroImagem alt={titulo.value} src={img}
            type='file'
            name='image'
            id='image'
            onChange={handleImgChange} 
          />
          <div>
            <InputContainer>
              <div style={{maxWidth: '350px'}}>
                <InputGeral className='titulo' type='text' placeholder='Título' {...titulo}  />
                <TextArea className='sinopse' placeholder='Sinopse' {...sinopse} />
              </div>
              <div style={{maxWidth: '350px'}}>
                <InputGeral className='autor' type='text' placeholder='Autor' {...autor} />
                <InputGeral className='genero' type='text' placeholder='Gênero' {...genero} />
                <InputGeral className='dataEntrada' type='date' {...dataEntrada} />
              </div>
            </InputContainer>
           <CadastroBotoes />
          </div>
        </NovoLivro>
    </section>
  )
}

export default CadastroDados