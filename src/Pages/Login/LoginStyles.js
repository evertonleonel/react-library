import styled from 'styled-components';
import Biblioteca from '../../Assets/biblioteca.png';
import Retangulo from '../../Assets/retangulo.svg';

export const LoginContent = styled.div`
    height: 100vh;
    background-image: url(${Biblioteca});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 81.5%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background-image: url(${Retangulo});
        background-size: cover;
        position: absolute;
    }
`;

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 44.3rem;
    height: 44.6rem;
    background-color: #ffffff;
    border: 1px solid #70707040;
    border-radius: 8px;
    margin: 0 10px;
    z-index: 10;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const LinkSenhaPerdida = styled.p`
    text-align: left;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: underline;
    color: #000000;
    cursor: pointer;
    margin-bottom: 32px;
`;
