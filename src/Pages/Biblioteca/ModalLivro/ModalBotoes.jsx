import React from 'react';
import Button from '../../../Components/Forms/Button';
import { BotoesModal } from './ModalLivro';

const ModalBotoes = () => {
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
            <Button
                border={'1px solid #ed5e5e'}
                color={'#ed5e5e'}
                cor={'#fff'}
                width={'10.1rem'}
            >
                Inativar
            </Button>
            <Button
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
