import React from 'react';
import { ModalInativar, MotivoInativar } from './ModalLivro';

const ModalExtraInativar = ({ ultimaInativacao }) => {
    return (
        <>
            {ultimaInativacao && (
                <ModalInativar>
                    <h2>Informações da inativação</h2>
                    <MotivoInativar>
                        <h3>Motivo</h3>
                        <p>{ultimaInativacao}</p>
                    </MotivoInativar>
                </ModalInativar>
            )}
        </>
    );
};

export default ModalExtraInativar;
