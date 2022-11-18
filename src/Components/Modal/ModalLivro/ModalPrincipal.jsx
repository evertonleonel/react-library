import React from 'react'
import ModalBotoes from './ModalBotoes';
import ModalCapaBotao from './ModalCapaBotao';
import ModalInfo from './ModalInfo';
import { Modal } from './ModalPrincipal';

const ModalPrincipal = () => {

  const [livros, setLivros] = React.useState(null);

  React.useEffect(() =>{
    async function fetchLivro (){
      const response = await fetch('http://localhost:5000/books');
      const json = await response.json();
      setLivros(json);
    }

    fetchLivro ();
  },[])

 

  return (
    < Modal>
      {livros && <ModalCapaBotao src={livros[0].image} />}
      <div>
          <div>
            <h1>{livros[0].tittle}</h1>
              <ModalInfo titulo='Sinopse' info={livros[0].synopsis} />
              <ModalInfo titulo='Autor' info={livros[0].author} />
              <ModalInfo titulo='Gênero' info={livros[0].genre} />
              <ModalInfo titulo='Data de entrada' info={livros[0].systemEntryDate} />
          </div>
          <ModalBotoes />
      </div>
    </Modal>
  )
}

export default ModalPrincipal