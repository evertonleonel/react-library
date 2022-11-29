import React from 'react';
import { ContainerMain } from '../../Components/GlobalStyles/styles';
import Header from '../../Components/Header/Header';
import Head from '../../Components/Helper/Head';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import EmprestimoHistorico from './EmprestimoHistorico';

const Emprestimo = () => {
    return (
        <>
            <Head
                title="Empréstimos"
                description="Página Histórico de Empréstimos de todos os Livros"
            />
            <Header />
            <ContainerMain>
                <LinkVoltar pagina="Histórico de Emprétimos" />
                <EmprestimoHistorico />
            </ContainerMain>
        </>
    );
};

export default Emprestimo;
