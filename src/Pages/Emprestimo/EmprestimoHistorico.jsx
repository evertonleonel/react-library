import React from 'react';
import FiltroLivro from '../../Assets/filtroEmprestimo.svg';
import useFetch from '../../Hooks/useFetch';
import { GET_BOOKS } from '../../Services/api';
import { ContainerTabela, TabelaContent } from './EmprestimoStyle';

const EmprestimoHistorico = () => {
    const [livroFiltrado, setLivroFiltrado] = React.useState([]);
    const [livros, setLivros] = React.useState('');
    const [buscarTitulo, setBuscarTitulo] = React.useState('');
    const [buscarNome, setBuscarNome] = React.useState('');
    const [buscarClasse, setBuscarClasse] = React.useState('');
    const [buscarDataRetirada, setBuscarDataRetirada] = React.useState('');
    const [buscarDataEntrega, setBuscarDataEntrega] = React.useState('');

    const { request } = useFetch();

    React.useEffect(() => {
        buscarLivros();
    }, [
        buscarNome,
        buscarTitulo,
        buscarClasse,
        buscarDataRetirada,
        buscarDataEntrega,
    ]);

    const buscarLivros = async () => {
        const { url, options } = GET_BOOKS();
        request(url, options);
        const response = await fetch(url, options);
        const json = await response.json();
        setLivros(json.filter((book) => book.rentHistory.length > 0));

        if (
            buscarClasse ||
            buscarNome ||
            buscarTitulo ||
            buscarDataRetirada ||
            buscarDataEntrega
        ) {
            filtrando();
        } else {
            setLivroFiltrado(
                json.filter((book) => book.rentHistory.length > 0)
            );
        }
    };

    async function filtrando() {
        if (buscarTitulo) {
            const filtrarPorTitulo = livros.filter(
                (livro) =>
                    livro.tittle
                        .toLowerCase()
                        .indexOf(buscarTitulo.toLowerCase()) > -1
            );
            setLivroFiltrado(filtrarPorTitulo);
        }

        if (buscarNome) {
            livros.forEach((livro) => {
                livro.rentHistory = livro.rentHistory.filter(
                    (historico) =>
                        historico.studentName
                            .toLowerCase()
                            .indexOf(buscarNome.toLowerCase()) > -1
                );
            });
            setLivroFiltrado(livros);
        }

        if (buscarClasse) {
            livros.forEach((livro) => {
                livro.rentHistory = livro.rentHistory.filter(
                    (historico) =>
                        historico.class
                            .toLowerCase()
                            .indexOf(buscarClasse.toLowerCase()) > -1
                );
            });

            setLivroFiltrado(livros);
        }

        if (buscarDataRetirada) {
            livros.forEach((livro) => {
                livro.rentHistory = livro.rentHistory.filter(
                    (historico) =>
                        historico.withdrawalDate
                            .toLowerCase()
                            .indexOf(
                                formatarData(buscarDataRetirada).toLowerCase()
                            ) > -1
                );
            });
        }

        if (buscarDataEntrega) {
            livros.forEach((livro) => {
                livro.rentHistory = livro.rentHistory.filter(
                    (historico) =>
                        historico.deliveryDate
                            .toLowerCase()
                            .indexOf(
                                formatarData(buscarDataEntrega).toLowerCase()
                            ) > -1
                );
            });
        }
    }

    function formatarData(dataAtual) {
        let formatarData = dataAtual;
        return formatarData.split('-').reverse().join('/');
    }

    return (
        <ContainerTabela>
            <TabelaContent>
                <table>
                    <thead>
                        <tr>
                            <th>Aluno</th>
                            <th>Turma</th>
                            <th>Livro</th>
                            <th>Data da Retirada</th>
                            <th>Data da Entrega</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="filtro-livro">
                                <input
                                    type="text"
                                    value={buscarNome}
                                    onChange={(event) =>
                                        setBuscarNome(event.target.value)
                                    }
                                />

                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <input
                                    type="text"
                                    value={buscarClasse}
                                    onChange={(event) =>
                                        setBuscarClasse(event.target.value)
                                    }
                                />

                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <input
                                    type="text"
                                    value={buscarTitulo}
                                    onChange={(event) =>
                                        setBuscarTitulo(event.target.value)
                                    }
                                />

                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <input
                                    type="text"
                                    value={buscarDataRetirada}
                                    onChange={(event) =>
                                        setBuscarDataRetirada(
                                            event.target.value
                                        )
                                    }
                                />
                            </td>
                            <td className="filtro-livro">
                                <input
                                    type="text"
                                    value={buscarDataEntrega}
                                    onChange={(event) =>
                                        setBuscarDataEntrega(event.target.value)
                                    }
                                />
                            </td>
                        </tr>
                        {livroFiltrado &&
                            livroFiltrado.map((livro) => {
                                return livro.rentHistory.map(
                                    (historico, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{historico.studentName}</td>
                                                <td>{historico.class}</td>
                                                <td>{livro.tittle}</td>
                                                <td>
                                                    {historico.withdrawalDate}
                                                </td>
                                                <td>
                                                    {historico.deliveryDate}
                                                </td>
                                            </tr>
                                        );
                                    }
                                );
                            })}
                    </tbody>
                </table>
            </TabelaContent>
        </ContainerTabela>
    );
};

export default EmprestimoHistorico;
