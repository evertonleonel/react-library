import React, { useEffect } from 'react';
import InputPadrão from '../../Components/Forms/InputPadrão';
import Button from '../../Components/Forms/Button';
import Lupa from '../../Assets/lupa.svg';
import { ImagemIcone, DivBuscar, PesquisaContainer } from './BibliotecaStyles';
import BibliotecaFiltro from './BibliotecaFiltro';
import { LivroContext } from '../../Hooks/LivroContext';
import { InputGeral } from '../../Components/Forms/FormStyles';

const BibliotecaPesquisar = () => {
    const [inputPesquisar, setInputPesquisar] = React.useState('');
    const [selectFiltro, setSelectFiltro] = React.useState('');
    const global = React.useContext(LivroContext);
    const setLoadLivros = global.setLoadLivros;
    const livros = global.livros;

    function inputChange(event) {
        const { value } = event.target;
        setInputPesquisar(value);
    }

    function filtroChange(event) {
        const { value } = event.target;
        setSelectFiltro(value);
    }

    const filtrarLivros = async (pesquisa, tipo) => {
        const livrosFiltrados = livros.filter(
            (livro) =>
                livro[tipo].toLowerCase().indexOf(pesquisa.toLowerCase()) > -1
        );

        setLoadLivros(livrosFiltrados);
    };

    function buscarFiltros() {
        filtrarLivros(inputPesquisar, selectFiltro);
    }

    return (
        <PesquisaContainer>
            <DivBuscar>
                <ImagemIcone src={Lupa} />
                <InputGeral
                    style={{
                        paddingLeft: '49px',
                        outline: '0',
                        border: '0',
                        font: 'italic normal normal 16px/21px Roboto',
                    }}
                    onChange={inputChange}
                    placeholder={'Pesquisar livro...'}
                />
                <Button
                    onClick={buscarFiltros}
                    height={'37px'}
                    style={{
                        maxWidth: '82px',
                        border: 'none',
                        fontWeight: 'normal',
                        marginRight: '8px',
                    }}
                >
                    Buscar
                </Button>
            </DivBuscar>

            <BibliotecaFiltro onChange={filtroChange} />
        </PesquisaContainer>
    );
};

export default BibliotecaPesquisar;
