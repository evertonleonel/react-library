import React from 'react'
import Button from '../../Components/Forms/Button'
import { InputGeral } from '../../Components/Forms/FormStyles'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { BOOKS_POST } from '../../Services/api'


const CadastroDados = () => {
  const titulo = useForm()
  const autor = useForm()
  const genero = useForm()
  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch()

  function handleImgChange(event){
    event.preventDefault()
    const formData = new FormData();
    formData.append('image', img.raw);
    formData.append('tittle', titulo.value);
    formData.append('author', autor.value);
    formData.append('genre', genero.value);

    const {url, options} = BOOKS_POST(formData)
    request( url, options)
  }

  function handleSubmit({target}) {
    setImg({
      raw: target.files[0],
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='file' name='image' id='image' onChange={handleImgChange} />
        <InputGeral type='text' placeholder='Título' {...titulo} />
        <InputGeral type='text' placeholder='Autor' {...autor} />
        <InputGeral type='text' placeholder='Gênero'{...genero} />
        <InputGeral  type='date' />
        <Button cor={'#fff'} >Cancelar</Button>
        <Button border={'none'}>Salvar</Button>
      </form>
    </section>
  )
}

export default CadastroDados