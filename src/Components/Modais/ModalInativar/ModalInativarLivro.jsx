import React from 'react';
import { Modal } from '../../../Pages/Biblioteca/ModalLivro/ModalLivro';
import { InativarLivro } from './ModalInativar';
import ModalBotaoFechar from '../ModalBotaoFechar';
import Button from '../../Forms/Button';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import TextAreaModal from '../../Forms/TextAreaModal';
import { STATUS_POST } from '../../../Services/api';

const ModalInativarLivro = ({
    onClick,
    livroSelecionado,
    motivoInativacao,
    setStatusLivro,
}) => {
    const [fecharModal, setFecharModal] = React.useState(null);
    const { request } = useFetch();
    let [livroStatus, setLivroStatus] = React.useState(null);

    React.useEffect(() => {
        setLivroStatus(livroSelecionado);
    }, [livroSelecionado]);

    const descricao = useForm();

    function handleSubmit(event) {
        event.preventDefault();

        if (!descricao.validate()) return;
        const novoStatus = {
            isActive: false,
            description: descricao.value,
        };

        livroStatus.status = novoStatus;

        const { url, options } = STATUS_POST(livroSelecionado, livroStatus);
        request(url, options);

        setFecharModal(onClick);
        setStatusLivro();
        motivoInativacao(livroStatus.status.description);
    }

    return (
        <Modal>
            <InativarLivro>
                <div className="divInativar">
                    <h2>Inativar Livro</h2>
                    <form>
                        <TextAreaModal
                            label={'Descrição'}
                            name={descricao}
                            required
                            {...descricao}
                        />

                        <Button
                            onClick={handleSubmit}
                            style={{
                                color: '#ED5E5E',
                                border: '1px solid #ed5e5e',
                                backgroundColor: '#fff',
                                alignSelf: 'flex-end',
                                fontSize: '16px',
                                width: '101px',
                                height: '53px',
                                textTransform: 'none',
                            }}
                        >
                            Inativar
                        </Button>
                    </form>
                </div>
                <ModalBotaoFechar onClick={onClick} setModalLivro={true} />
            </InativarLivro>
        </Modal>
    );
};

export default ModalInativarLivro;
