import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {Nav, Span, Icone, Div} from './HomeStyles'
import IconeAdicionar from '../../Assets/adicionar_grande.png'
import IconeLivro from '../../Assets/livro.svg'
import IconePendente from '../../Assets/pendente.svg'

const HomeNav = () => {
  const navigate = useNavigate()

  function handleItemClick(event){
    switch(event.currentTarget.textContent){
      case  'Cadastrar novo livro': navigate('/cadastro');
      break;
      case  'Biblioteca': navigate('/biblioteca');
      break;
      case  'Histórico de empréstimos': navigate('/emprestimo');
      break;
    }
  }

  return (
    <Nav>
      <Div onClick={handleItemClick}>
        <Icone>
          <img src={IconeAdicionar} />
        </Icone>
        <Span>
          <NavLink to='/cadastro'>Cadastrar novo livro</NavLink>
        </Span>
      </Div>
      <Div onClick={handleItemClick}>
        <Icone>
          <img src={IconeLivro} />
        </Icone>
        <Span>
          <NavLink to='/biblioteca'>Biblioteca</NavLink>
        </Span>
      </Div>
      <Div onClick={handleItemClick}>
        <Icone>
          <img src={IconePendente} />
        </Icone>
        <Span>
          <NavLink to='/emprestimo'>Histórico de empréstimos</NavLink>
        </Span>
      </Div>
    </Nav>
  )
}

export default HomeNav