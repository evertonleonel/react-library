import React from 'react';
import { Modal } from '../../../Pages/Biblioteca/ModalLivro/ModalLivro';
import Button from '../../Forms/Button';
import ModalBotaoFechar from '../ModalBotaoFechar';
import { EmprestarLivro } from './ModalEmprestar';
import IconeLivro from '../../../Assets/icone_livro.png';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { RENT_POST } from '../../../Services/api';
import { InputGeral } from '../../Forms/FormStyles';
import { validarData } from '../../../Services/api';

const ModalEmprestarLivro = ({
    onClick,
    livroSelecionado,
    setDevolvido,
    emprestar,
}) => {
    const [fecharModal, setFecharModal] = React.useState(null);
    const [livroParaEmprestar, setLivroParaEmprestar] = React.useState(null);
    const { request } = useFetch();
    const aluno = useForm();
    const classe = useForm();
    const dataRetirada = useForm();
    const dataEntrega = useForm();

    React.useEffect(() => {
        setLivroParaEmprestar(livroSelecionado);
    }, [livroSelecionado]);

    function formatarData(dataAtual) {
        let formatarData = dataAtual.value;
        return formatarData.split('-').reverse().join('/');
    }

    function handleSubmit(event) {
        event.preventDefault();

        const novoRentHistory = {
            studentName: aluno.value,
            class: classe.value,
            withdrawalDate: formatarData(dataRetirada),
            deliveryDate: formatarData(dataEntrega),
        };

        if (!aluno.validate()) return;
        if (!classe.validate()) return;
        if (!validarData(dataRetirada, dataEntrega)) return;

        livroParaEmprestar.rentHistory.push(novoRentHistory);

        const { url, options } = RENT_POST(
            livroSelecionado,
            livroParaEmprestar
        );
        request(url, options);
        setDevolvido();
        emprestar();
        setFecharModal(onClick);
    }

    return (
        <Modal>
            <EmprestarLivro>
                <h3>Informe os dados do aluno antes de continuar</h3>
                <form>
                    <InputGeral
                        required
                        type="text"
                        placeholder="Nome do aluno"
                        {...aluno}
                    />
                    <InputGeral type="text" placeholder="Turma" {...classe} />
                    <InputGeral
                        required
                        type="text"
                        placeholder="Data da retirada"
                        onFocus={({ target }) => {
                            target.type = 'date';
                        }}
                        {...dataRetirada}
                    />
                    <InputGeral
                        required
                        type="text"
                        placeholder="Data da Entrega"
                        onFocus={({ target }) => {
                            target.type = 'date';
                        }}
                        {...dataEntrega}
                    />
                </form>
                <div style={{ width: '272px', alignSelf: 'flex-end' }}>
                    <Button
                        onClick={handleSubmit}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '12px',
                            border: '1px solid #ADB5BD',
                        }}
                    >
                        <img
                            src={IconeLivro}
                            alt="Icone do botão Emprestar / Devolver"
                        />
                        Emprestar
                    </Button>
                </div>
                <ModalBotaoFechar onClick={onClick} />
            </EmprestarLivro>
        </Modal>
    );
};

export default ModalEmprestarLivro;
