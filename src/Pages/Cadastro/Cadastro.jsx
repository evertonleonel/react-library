import React from 'react';
import { ContainerMain } from '../../Components/GlobalStyles/styles';
import Header from '../../Components/Header/Header';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import CadastroDados from './CadastroDados';

const Cadastro = () => {
    return (
        <>
            <Header />
            <CadastroDados />
        </>
    );
};

export default Cadastro;
