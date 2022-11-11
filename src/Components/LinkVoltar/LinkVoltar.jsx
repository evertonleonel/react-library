import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SetaVoltar from '../../Assets/seta_esquerda.svg'
import { LinkContainer } from './styles'

const LinkVoltar = ({pagina}) => {
  return (
    <LinkContainer>
       <Link to='/home'>
        <img src={SetaVoltar} />
          Home 
        </Link>
        <Link to='/home' 
        style={{color:'#000000', fontWeight:'500'}} >
        / {pagina}
        </Link>
    </LinkContainer>
  )
}

export default LinkVoltar