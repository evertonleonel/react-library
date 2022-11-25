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
    cursor: pointer;

    p {
        margin-left: 8px;
        margin-right: 4px;
    }
    img {
        height: 24px;
        width: 24px;
    }
`;
