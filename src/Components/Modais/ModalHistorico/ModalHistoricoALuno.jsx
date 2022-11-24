import React from 'react';
import { Modal } from '../../../Pages/Biblioteca/ModalLivro/ModalLivro';
import ModalBotaoFechar from '../ModalBotaoFechar';
import { HistoricoLivro } from './ModalHistorico';
import TabelaHistorico from './TabelaHistorico';

const ModalHistoricoALuno = ({ onClick, livroSelecionado }) => {
    return (
        <Modal>
            <HistoricoLivro>
                <h2>Histórico de empréstimos do livro</h2>
                <TabelaHistorico livroSelecionado={livroSelecionado} />
                <ModalBotaoFechar onClick={onClick} />
            </HistoricoLivro>
        </Modal>
    );
};

export default ModalHistoricoALuno;
