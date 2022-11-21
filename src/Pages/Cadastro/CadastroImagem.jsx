import React from 'react'
import {ImgCapa} from './CadastroStyles'
import Adicionar from '../../Assets/adicionar.svg'

const CadastroImagem = ({type,name, id, onChange, src, alt}) => {
  return (
    <div>
      <ImgCapa>
        <img src={Adicionar} />
        Capa
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
        />
      </ImgCapa>
    </div>
  )
}

export default CadastroImagem