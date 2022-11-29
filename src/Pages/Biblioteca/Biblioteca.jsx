import React from 'react';
import { ContainerMain } from '../../Components/GlobalStyles/styles';
import Header from '../../Components/Header/Header';
import Head from '../../Components/Helper/Head';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import BibliotecaGaleria from './BibliotecaGaleria';

const Biblioteca = () => {
    return (
        <>
            <Head
                title="Biblioteca"
                description="Página com todos os livros da Biblioteca"
            />
            <Header />
            <ContainerMain>
                <LinkVoltar pagina="Biblioteca" />
                <BibliotecaGaleria />
            </ContainerMain>
        </>
    );
};

export default Biblioteca;
