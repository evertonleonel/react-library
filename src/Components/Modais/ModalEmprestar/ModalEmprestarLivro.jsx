import React from 'react'
import {Modal} from '../../../Pages/Biblioteca/ModalLivro/ModalLivro'
import Button from '../../Forms/Button'
import ModalBotaoFechar from '../ModalBotaoFechar'
import { EmprestarLivro } from './ModalEmprestar'
import IconeLivro from '../../../Assets/icone_livro.png'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import { RENT_POST } from '../../../Services/api'
import { InputGeral } from '../../Forms/FormStyles'

const ModalEmprestarLivro = ({onClick, livroSelecionado}) => {
  const [fecharModal, setFecharModal] = React.useState(null)
  const [livroParaEmprestar, setLivroParaEmprestar] = React.useState(null)
  const {request} = useFetch()
  const aluno = useForm()
  const classe = useForm()
  const dataEntrada = useForm()
  const dataSaida = useForm()
 
    React.useEffect( () => {
      setLivroParaEmprestar(livroSelecionado)
    }, [])

    function formatarData(dataAtual){
      let formatarData = dataAtual.value
      return formatarData.split('-').reverse().join('/');
    };
    
    function handleSubmit(event){
      event.preventDefault()
        
        const novoRentHistory = 
        { 
          studentName: aluno.value,
          class: classe.value,
          withdrawalDate: formatarData(dataEntrada),
          deliveryDate: formatarData(dataSaida)
        };
        
        livroParaEmprestar.rentHistory.push(novoRentHistory)
      
        const {url, options} = RENT_POST(livroSelecionado, livroParaEmprestar)
        request( url, options)
       
        alert('Livro cadastrado com sucesso')
        setFecharModal(onClick)
    };

  return (
    <Modal>
      <EmprestarLivro>
        <h3>Informe os dados do aluno antes de continuar</h3>
        <form>
          <InputGeral type="text" placeholder='Nome do aluno' {...aluno} />
          <InputGeral type="text" placeholder='Turma' {...classe} />
          <InputGeral type="date"  {...dataEntrada} />
          <InputGeral type="date" {...dataSaida} />
        </form>
        <div style={{width: '272px', alignSelf: 'flex-end',}}>
          <Button onClick={handleSubmit}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'12px', border: '1px solid #ADB5BD'}}>
                <img src={IconeLivro} alt="Icone do botão Emprestar / Devolver" />
                Emprestar
          </Button>
        </div>
        <ModalBotaoFechar onClick={onClick} />
      </EmprestarLivro >
    </Modal>
  )
}

export default ModalEmprestarLivro