import React from 'react';
import { ModalInativar, MotivoInativar } from './ModalLivro';

const ModalExtraInativar = ({ statusLivro, livroSelecionado }) => {
    const [allStatusLivro, setAllStatusLivros] = React.useState('');
    React.useEffect(() => {
        setAllStatusLivros(statusLivro);
    }, [statusLivro]);
    console.log(allStatusLivro);

    return (
        <>
            {livroSelecionado && allStatusLivro && (
                <ModalInativar>
                    <h2>Informações da inativação</h2>
                    <MotivoInativar>
                        <h3>Motivo</h3>
                        <p>{allStatusLivro}</p>
                    </MotivoInativar>
                </ModalInativar>
            )}
        </>
    );
};

export default ModalExtraInativar;
