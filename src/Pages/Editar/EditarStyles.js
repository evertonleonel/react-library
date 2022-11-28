import styled from 'styled-components';

export const EditarContainer = styled.section`
    background-color: #fff;
    margin: 24px;
    height: calc(100vh - 144px);
    display: flex;
    position: relative;

    @media (max-width: 1030px) {
        height: 100%;
    }
`;

export const EditarLivro = styled.form`
    display: flex;
    justify-content: center;

    gap: 48px;
    margin: 167px auto;

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
        margin-bottom: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 167px 30px;
    }

    @media (max-width: 830px) {
        div {
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const ImgCapa = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 172px;
    height: 206px;
    color: #ffc501;
    font-size: 20px;
    font-weight: 500;

    border: 2px dashed currentColor;
    cursor: pointer;

    span {
        display: flex;
        gap: 8px;
    }

    .escolher-imagem:hover {
        outline: 2px solid #167ce2;
        transition: outline 100ms ease-in-out;
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

export const EditTextArea = styled.textarea`
    width: 100%;
    height: 129px;
    resize: none;
    padding: 16px;
    background-color: #ffffff;
    color: #133052;
    text-align: left;
    font-size: clamp(16px, 18px, 21px);
    border-radius: 5px;
    border: 1px solid #133052;
    outline: none;
    box-sizing: border-box;

    &::placeholder {
        color: #133052;
        font-size: calc(14px, 16px, 19px);
    }
`;
