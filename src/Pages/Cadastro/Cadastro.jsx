import React from 'react';
import Header from '../../Components/Header/Header';
import Head from '../../Components/Helper/Head';
import CadastroDados from './CadastroDados';

const Cadastro = () => {
    return (
        <>
            <Head
                title="Cadastrar Livro"
                description="Página para Cadastrar um novo livro"
            />
            <Header />
            <CadastroDados />
        </>
    );
};

export default Cadastro;
