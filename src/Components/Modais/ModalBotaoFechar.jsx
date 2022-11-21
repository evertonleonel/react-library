import React from 'react'
import FecharModal from '../../Assets/x-fechar.png'

const ModalBotaoFechar = () => {
  return (
    <div className='BotaoFecharModal'>
    <img  src={FecharModal}  onClick={(event) => {console.log(event.target)}}/>
    </div>
  )
}

export default ModalBotaoFechar