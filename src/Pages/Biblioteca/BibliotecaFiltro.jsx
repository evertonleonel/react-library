import React from 'react';
import Options from '../../Components/Filtro/Options';
import { SelectionFiltro } from './BibliotecaStyles';

const BibliotecaFiltro = ({ onChange, id }) => {
    return (
        <>
            <SelectionFiltro onChange={onChange} id={id}>
                <Options disabled item="Filtrar" />
                <Options value="genre" item="Gênero" />
                <Options value="author" item="Autor" />
                <Options value="systemEntryDate" item="Data de Entrada" />
                <Options value="synopsis" item="Sinopse" />
            </SelectionFiltro>
        </>
    );
};

export default BibliotecaFiltro;
