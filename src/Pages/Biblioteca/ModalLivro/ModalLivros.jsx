import React from 'react'
import Button from '../../../Components/Forms/Button';
import { 
  ContainerDireito,
  ContainerEsquerdo,
  ContainerPrincipal,
  ImagemLivro,
  Modal,
  ModalLivroContent
} from './ModalLivro';
import IconeLivro from '../../../Assets/icone_livro.png'
import ModalBotoes from './ModalBotoes';
import ModalInfo from './ModalInfo';
import FecharModal from '../../../Assets/x-fechar.png'


const ModalLivros = ({livroSelecionado}) => {
  const [livros, setLivros] = React.useState(null);

  React.useEffect(() =>{
    async function fetchLivro (){
      const response = await fetch(`http://localhost:5000/books/${livroSelecionado.id}`);
      const json = await response.json();
      setLivros(json);
    }

    fetchLivro ();
  },[])

  console.log(livroSelecionado)

  return (
    <Modal>
      <ModalLivroContent>
        <ContainerPrincipal>
          <ContainerEsquerdo>
            {livros && <ImagemLivro src={livros.image} /> }
            <Button>
              <img   src={IconeLivro} alt="Icone do botão Emprestar / Devolver" />
              Emprestar
            </Button>
          </ContainerEsquerdo>
          <ContainerDireito>
           {livros && <div>
              <h2>{livros.tittle}</h2>
              <ModalInfo titulo='Sinopse' info={livros.synopsis} />
              <ModalInfo titulo='Autor' info={livros.author} />
              <ModalInfo titulo='Gênero' info={livros.genre} />
              <ModalInfo titulo='Data de entrada' info={livros.systemEntryDate} />
            </div>}
            <ModalBotoes />
            <div className='BotaoFecharModal'>
              <img  src={FecharModal}  onClick={(event) => {console.log(event.target)}}/>
            </div>
          </ContainerDireito>
        </ContainerPrincipal>
      </ModalLivroContent>
    </Modal>
  )
}

export default ModalLivros