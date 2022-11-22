import React from 'react'
import FecharModal from '../../Assets/x-fechar.png'

const ModalBotaoFechar = ({onClick}) => {
  return (
    <div className='BotaoFecharModal'>
    <img  src={FecharModal}  onClick={onClick}/>
    </div>
  )
}

export default ModalBotaoFechar