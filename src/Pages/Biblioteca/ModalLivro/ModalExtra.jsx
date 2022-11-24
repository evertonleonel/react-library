import React from 'react';
import { ModalExtraDados } from './ModalLivro';

const ModalExtra = ({ ultimoEmprestimo }) => {
    return (
        <>
            {ultimoEmprestimo && (
                <ModalExtraDados>
                    <h2>Dados do aluno</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome do aluno</th>
                                <th>Turma</th>
                                <th>Data da retirada</th>
                                <th>Data de entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{ultimoEmprestimo.studentName}</th>
                                <th>{ultimoEmprestimo.class}</th>
                                <th>{ultimoEmprestimo.withdrawalDate}</th>
                                <th>{ultimoEmprestimo.deliveryDate}</th>
                            </tr>
                        </tbody>
                    </table>
                </ModalExtraDados>
            )}
        </>
    );
};

export default ModalExtra;
