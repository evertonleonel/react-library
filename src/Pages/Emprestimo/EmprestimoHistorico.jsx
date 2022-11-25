import React from 'react';
import FiltroLivro from '../../Assets/filtroEmprestimo.svg';
import { InputGeral } from '../../Components/Forms/FormStyles';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { GET_BOOKS } from '../../Services/api';
import { ContainerTabela, TabelaContent } from './EmprestimoStyle';

const EmprestimoHistorico = () => {
    const [historicoLivros, setHistoricoLivros] = React.useState([]);
    const [livroFiltrado, setLivoFiltrado] = React.useState([]);
    const [livros, setLivros] = React.useState('');
    const { request } = useFetch();

    const aluno = useForm();
    const classe = useForm();
    const livro = useForm();
    const dataRetirada = useForm();
    const dataEntrega = useForm();

    const buscarLivros = async () => {
        const { url, options } = GET_BOOKS();
        request(url, options);

        const response = await fetch(url, options);
        const json = await response.json();

        setLivros(json);
    };

    React.useEffect(() => {
        buscarLivros();
        pegarHistoricos();
    }, []);

    async function pegarHistoricos() {
        let books = livros;

        const tratarLivros = books.map((book) => ({
            tittle: book.tittle,
            rentHistory: book.rentHistory,
        }));

        let arrayNomes = [];

        const pegarNomes = (livros) => {
            livros.forEach((livro) => {
                let alunos = livro.rentHistory;
                alunos.map((aluno) => {
                    arrayNomes.push(aluno.studentName);
                });
            });
        };
        pegarNomes(tratarLivros);

        console.log(arrayNomes, 'nomes');

        setHistoricoLivros(tratarLivros);
        return true;
    }
    console.log(historicoLivros);

    const nomes = historicoLivros.forEach((historico) => {
        return historico.rentHistory.map((aluno) => {
            return aluno.studentName;
        });
    });

    console.log(nomes);

    function formatarData(dataAtual) {
        let formatarData = dataAtual.value;
        return formatarData.split('-').reverse().join('/');
    }

    //   const filtrarHistorico =  (filtro, campo) => {
    //     const livros =  obterHistoricos();

    //     livros.forEach((livro) => {
    //       livro.rentHistory = livro.rentHistory.filter((historico) =>
    //         historico[campo].toLowerCase().indexOf(filtro.toLowerCase()) > -1
    //       );
    //     });

    //     renderizarHistorico(livros);
    //   };

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
                                <InputGeral type="text" {...aluno} />
                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <InputGeral type="text" {...classe} />
                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <InputGeral type="text" {...livro} />
                                <img src={FiltroLivro} alt="icone filtro" />
                            </td>
                            <td className="filtro-livro">
                                <InputGeral type="date" {...dataRetirada} />
                            </td>
                            <td className="filtro-livro">
                                <InputGeral type="date" {...dataEntrega} />
                            </td>
                        </tr>
                        {livros &&
                            livros.map((livro, index) => {
                                return (
                                    <tr id={index}>
                                        <td>{livro.rentHistory.studentName}</td>
                                        <td>{livro.tittle}</td>
                                        <td>T41</td>
                                        <td>01/01/2022</td>
                                        <td>10/01/2022</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </TabelaContent>
        </ContainerTabela>
    );
};

export default EmprestimoHistorico;
