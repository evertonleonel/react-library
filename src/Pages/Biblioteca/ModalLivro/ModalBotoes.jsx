import React from 'react';
import Button from '../../../Components/Forms/Button';
import { BotoesModal } from './ModalLivro';

const ModalBotoes = ({
    abrirInativar,
    statusLivro,
    ativarLivro,
    abrirHistoricoAluno,
}) => {
    const [ativo, setAtivo] = React.useState('');
    React.useEffect(() => {
        setAtivo(statusLivro);
    }, [statusLivro]);

    return (
        <BotoesModal>
            <Button
                border={'1px solid #167ce2'}
                color={'#167ce2'}
                cor={'#fff'}
                width={'9rem'}
            >
                Editar
            </Button>
            {ativo && ativo ? (
                <Button
                    onClick={ativarLivro}
                    border={'1px solid #49D749'}
                    color={'#49D749'}
                    cor={'#fff'}
                    width={'10.1rem'}
                >
                    Ativar
                </Button>
            ) : (
                <Button
                    border={'1px solid #ed5e5e'}
                    color={'#ed5e5e'}
                    cor={'#fff'}
                    width={'10.1rem'}
                    onClick={abrirInativar}
                >
                    Inativar
                </Button>
            )}

            <Button
                onClick={abrirHistoricoAluno}
                border={'1px solid #000000'}
                color={'#000000'}
                cor={'#fff'}
                width={'11.3rem'}
            >
                Histórico
            </Button>
        </BotoesModal>
    );
};

export default ModalBotoes;
