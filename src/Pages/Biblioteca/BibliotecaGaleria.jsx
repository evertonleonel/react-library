import React from 'react'
import BibliotecaLivros from './BibliotecaLivros'
import BibliotecaPesquisar from './BibliotecaPesquisar'
import { DivGaleria } from './BibliotecaStyles'
import ModalLivros from './ModalLivro/ModalLivros'

const BibliotecaGaleria = () => {
  const [modalLivros, setModalLivros] = React.useState(null);
 
  return (
    <>
      <DivGaleria>
        <BibliotecaPesquisar />
        {modalLivros && <ModalLivros livroSelecionado={modalLivros} />} 
        <BibliotecaLivros setModalLivros={setModalLivros} />
     </DivGaleria>
    </>
  )
}

export default BibliotecaGaleria