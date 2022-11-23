import React from 'react';
import FiltroLivro from '../../../Assets/seta_baixo.svg';
import { TabelaConteiner } from './ModalHistorico';

const TabelaHistorico = () => {
    return (
        <TabelaConteiner>
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
                            <input type="text" />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>
                        <td className="filtro-livro">
                            <input type="text" />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>
                        <td className="filtro-livro">
                            <input type="text" />
                            <img src={FiltroLivro} alt="icone filtro" />
                        </td>
                        <td className="filtro-livro">
                            <input type="date" />
                        </td>
                        <td className="filtro-livro">
                            <input type="date" />
                        </td>
                    </tr>
                    <tr>
                        <td>Pedro O. Garcia</td>
                        <td>T41</td>
                        <td>Mais esperto que o diabo</td>
                        <td>01/01/2022</td>
                        <td>10/01/2022</td>
                    </tr>
                    <tr>
                        <td>Tamires V. Moura</td>
                        <td>T54</td>
                        <td>Pai Rico Pai Pobre</td>
                        <td>13/01/2022</td>
                        <td>23/01/2022</td>
                    </tr>
                    <tr>
                        <td>João A. Albuns</td>
                        <td>T42</td>
                        <td>Os segredos da mente milionária</td>
                        <td>23/01/2022</td>
                        <td>28/01/2022</td>
                    </tr>
                    <tr>
                        <td>Gustavo D. Silva</td>
                        <td>T13</td>
                        <td>Mindeset</td>
                        <td>01/02/2022</td>
                        <td>10/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </TabelaConteiner>
    );
};

export default TabelaHistorico;
