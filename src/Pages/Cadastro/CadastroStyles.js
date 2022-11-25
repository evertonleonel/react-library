import styled from 'styled-components';

export const ImgCapa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 172px;
    height: 206px;
    color: #ffc501;
    font-size: 20px;
    font-weight: 500;

    border: 2px dashed currentColor;
    cursor: pointer;
    transition: background-color 300ms ease-in-out;

    &::after {
        content: '';
        display: block;
    }
`;

export const CadastroContainer = styled.section`
    background-color: #fff;
    margin: 24px;
    height: calc(100vh - 144px);
    display: flex;
    position: relative;

    @media (max-width: 1030px) {
        height: 100%;
    }
`;

export const NovoLivro = styled.form`
    display: flex;
    justify-content: center;

    gap: 48px;
    margin: 167px auto;

    @media (max-width: 1030px) {
        gap: 24px;
        background-color: red;
        div {
            align-items: center;
            justify-content: center;
        }
    }

    .botoes {
        width: 14.3rem;
        height: 5.3rem;
        font-size: clamp(14px, 16px, 18px);
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media (max-width: 1030px) {
        justify-content: center;
        margin: 167px 30px;
    }

    @media (max-width: 720px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        div {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 24px;

    .titulo {
        margin-bottom: 24px;
    }

    .autor {
        margin-bottom: 24px;
    }

    .sinopse {
        grid-area: sinopse;
    }

    .genero {
        margin-bottom: 24px;
    }

    .dataEntrada {
        margin-bottom: 24px;
        position: relative;
    }

    @media (max-width: 1030px) {
        flex-wrap: wrap;
    }
`;
export const DivBotoes = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;

    @media (max-width: 1030px) {
        justify-content: flex-start;
    }
`;

export const ImagemEscolhida = styled.img`
    width: 100%;
    width: 172px;
    height: 206px;
    object-fit: cover;
    border-radius: 2px;
    cursor: pointer;
`;
