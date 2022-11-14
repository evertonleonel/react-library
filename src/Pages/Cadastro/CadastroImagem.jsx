import React from 'react'
import {ImgCapa} from './CadastroStyles'

const CadastroImagem = ({type,name, id, onChange}) => {
  return (
    <div>
      <ImgCapa>
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