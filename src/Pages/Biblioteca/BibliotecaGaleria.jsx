import React from 'react'
import BibliotecaLivros from './BibliotecaLivros'
import BibliotecaPesquisar from './BibliotecaPesquisar'
import { DivGaleria } from './BibliotecaStyles'
import ModalLivros from './ModalLivro/ModalLivros'

const BibliotecaGaleria = () => {
  const [modalLivros, setModalLivros] = React.useState(null);
  
  function fecharModal(){
    setModalLivros(false)
  }

  return (
    <>
      <DivGaleria>
        <BibliotecaPesquisar />
        {modalLivros && <ModalLivros livroSelecionado={modalLivros} onClick={fecharModal} />}
        <BibliotecaLivros setModalLivros={setModalLivros} />
     </DivGaleria>
    </>
  )
}

export default BibliotecaGaleria