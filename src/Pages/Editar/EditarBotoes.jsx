import React from 'react';
import { DivBotoes } from './EditarStyles';
import Button from '../../Components/Forms/Button';
import { useNavigate } from 'react-router-dom';

const EditarBotoes = () => {
    const navigate = useNavigate();
    return (
        <DivBotoes>
            <Button
                onClick={() => navigate('/home')}
                cor={'#fff'}
                className="botoes"
            >
                Cancelar
            </Button>
            <Button type="submit" border={'none'} className="botoes">
                Salvar
            </Button>
        </DivBotoes>
    );
};

export default EditarBotoes;
