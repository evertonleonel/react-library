import React from 'react';
import { ImagemEscolhida } from './CadastroStyles';

const CadastroFoto = ({ src, alt }) => {
    return <ImagemEscolhida src={src} alt={alt} />;
};

export default CadastroFoto;
