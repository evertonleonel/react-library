import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 36px;
    width: 100%;
    max-height: 96px;
    background-color: #ffffff;
`;

export const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 36px;
    width: 100%;
    max-height: 96px;
    background-color: #ffffff;
`;

export const CabecalhoLogout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    p {
        margin-left: 8px;
        margin-right: 4px;

        @media (max-width: 550px) {
            display: none;
        }
        &:hover {
            border-radius: 5px;
            color: #ffc501;

            transition: all 300ms ease-in-out;
        }
    }
    img {
        height: 24px;
        width: 24px;

        &:hover {
            border-radius: 5px;
            color: #ffc501;
            background-color: #dde;
            transition: all 300ms ease-in-out;
        }
    }
`;

export const DropSair = styled.div`
    position: absolute;
    width: 148px;
    height: 57px;
    padding: 15px;
    margin: 16px 0;
    top: 26px;
    right: 0;
    border-radius: 5px;
    background-color: #f4f4f4;
    transition: 0.3s;
    z-index: 10;

    &:hover {
        transition: all 300ms;
        color: #ffc501;
        background-color: #dde;
    }
`;
