import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SetaVoltar from '../../Assets/seta_esquerda.svg';
import { LinkContainer } from './styles';

const LinkVoltar = ({ pagina }) => {
    const [color, setColor] = React.useState('#000');

    const corAtual = {
        color: `${color}`,
        fontWeight: '500',
        transition: 'all 350ms ease-in-out',
    };

    return (
        <LinkContainer>
            <Link to="/home">
                <img src={SetaVoltar} />
                Home
            </Link>
            <Link
                to="/home"
                onMouseLeave={() => {
                    setColor('#000');
                }}
                onMouseEnter={() => {
                    setColor('#FFC501');
                }}
                style={corAtual}
            >
                / {pagina}
            </Link>
        </LinkContainer>
    );
};

export default LinkVoltar;
