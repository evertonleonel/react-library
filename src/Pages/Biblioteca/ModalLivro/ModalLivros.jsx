import React from 'react'
import Button from '../../../Components/Forms/Button'
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
import ModalExtra from './ModalExtra';
import   ModalExtraInativar from './ModalExtraInativar';
import ModalEmprestarLivro from '../../../Components/Modais/ModalEmprestar/ModalEmprestarLivro'

const ModalLivros = ({livroSelecionado, onClick, }) => {
  const [livros, setLivros] = React.useState(null);
  const [historicoLivro, setHistoricoLivro] = React.useState(null)
  const [modalEmprestar, setModalEmprestar] = React.useState(false);
  
  function abrirModalEmprestar(){
    setModalEmprestar(true)
  }

  function fecharModalEmprestar(){
    setModalEmprestar(false)
  }

  React.useEffect(() =>{
    async function fetchLivro (){
      const response = await fetch(`http://localhost:5000/books/${livroSelecionado.id}`);
      const json = await response.json();
      setLivros(json);
      setHistoricoLivro(json.rentHistory)
    }
    
    fetchLivro ();
  },[])

  return (
    <>
    {modalEmprestar ? (<ModalEmprestarLivro/>) :
      (<Modal >
        <ModalLivroContent>
          <ContainerPrincipal>
            <ContainerEsquerdo>
              {livros && <ImagemLivro src={livros.image} /> }
              <Button onClick={abrirModalEmprestar}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'12px',  border: '1px solid #ADB5BD'}}>
                <img src={IconeLivro} alt="Icone do botão Emprestar / Devolver" />
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
                <img  src={FecharModal}  onClick={onClick} />
              </div>
            </ContainerDireito>
          </ContainerPrincipal>
          {(historicoLivro && historicoLivro.length > 0) && <ModalExtra livroSelecionado = {livros} />}
          
          <ModalExtraInativar />
        </ModalLivroContent>
      </Modal>)
    }
      {modalEmprestar && <ModalEmprestarLivro onClick={fecharModalEmprestar} livroSelecionado = {livros} />}
    </>
  )
}

export default ModalLivros