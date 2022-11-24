import React from 'react';
import FiltroLivro from '../../../Assets/filtroEmprestimo.svg';
import useForm from '../../../Hooks/useForm';
import { InputGeral } from '../../Forms/FormStyles';
import { TabelaConteiner } from './ModalHistorico';

const TabelaHistorico = ({ livroSelecionado }) => {
    const [historicoAluno, setHistoricoAluno] = React.useState(
        livroSelecionado.rentHistory
    );
    let [historicoFiltrado, setHistoricoFiltrado] = React.useState([
        livroSelecionado.rentHistory,
    ]);

    const aluno = useForm();
    const turma = useForm();
    const dataEntrada = useForm();
    const dataEntrega = useForm();

    function formatarData(dataAtual) {
        let formatarData = dataAtual.value;
        return formatarData.split('-').reverse().join('/');
    }

    React.useEffect(() => {
        if (
            aluno.value ||
            turma.value ||
            dataEntrada.value ||
            dataEntrega.value
        ) {
            filtrarLivros();
        } else {
            setHistoricoFiltrado(historicoAluno);
        }
    }, [aluno.value, turma.value, dataEntrada.value, dataEntrega.value]);

    const filtrarLivros = () => {
        if (aluno.validate()) {
            historicoFiltrado = historicoAluno.filter(
                (historico) =>
                    historico.studentName
                        .toLowerCase()
                        .indexOf(aluno.value.toLowerCase()) > -1
            );
        }

        if (turma.validate()) {
            historicoFiltrado = historicoAluno.filter(
                (historico) =>
                    historico.class
                        .toLowerCase()
                        .indexOf(turma.value.toLowerCase()) > -1
            );
        }

        if (dataEntrada.validate()) {
            historicoFiltrado = historicoAluno.filter(
                (historico) =>
                    historico.withdrawalDate.indexOf(
                        formatarData(dataEntrada)
                    ) > -1
            );
        }

        if (dataEntrega.validate()) {
            historicoFiltrado = historicoAluno.filter(
                (historico) =>
                    historico.deliveryDate.indexOf(formatarData(dataEntrega)) >
                    -1
            );
        }

        setHistoricoFiltrado(historicoFiltrado);
    };

    return (
        <TabelaConteiner>
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Turma</th>
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
                            <InputGeral type="text" {...turma} />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>

                        <td className="filtro-livro">
                            <InputGeral type="date" {...dataEntrada} />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>
                        <td className="filtro-livro">
                            <InputGeral type="date" {...dataEntrega} />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>
                    </tr>
                    {historicoAluno &&
                        historicoFiltrado.map((aluno, index) => {
                            return (
                                <tr key={index}>
                                    <td>{aluno.studentName}</td>
                                    <td>{aluno.class}</td>
                                    <td>{aluno.withdrawalDate}</td>
                                    <td>{aluno.deliveryDate}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </TabelaConteiner>
    );
};

export default TabelaHistorico;
