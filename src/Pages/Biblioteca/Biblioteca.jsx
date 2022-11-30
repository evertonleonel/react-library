import React from 'react';
import Header from '../../Components/Header/Header';
import Head from '../../Components/Helper/Head';
import LinkVoltar from '../../Components/LinkVoltar/LinkVoltar';
import BibliotecaGaleria from './BibliotecaGaleria';
import { ContainerBiblioteca } from './BibliotecaStyles';

const Biblioteca = () => {
    return (
        <>
            <Head
                title="Biblioteca"
                description="Página com todos os livros da Biblioteca"
            />
            <Header />
            <ContainerBiblioteca>
                <LinkVoltar pagina="Biblioteca" />
                <BibliotecaGaleria />
            </ContainerBiblioteca>
        </>
    );
};

export default Biblioteca;
