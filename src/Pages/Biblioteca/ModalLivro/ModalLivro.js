import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    z-index: 100;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
    overflow-y: auto;

    @media (max-width: 9rem) {
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
`;

export const ImagemLivro = styled.img`
    width: 27.2rem;
    height: 39rem;
    object-fit: contain;
`;

export const ModalLivroContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #707070;
    overflow-wrap: normal;
    max-width: 81.6rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    max-height: 825px;

    @media (max-width: 9rem) {
        height: 100%;
        flex-wrap: wrap;
    }
`;

export const ContainerEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 400px) {
        margin: 0 10px;
    }

    h2,
    h3,
    p {
        color: #3e4756;
    }

    h2 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 8px;
        margin-top: 24px;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 24px;
    }

    .BotaoFecharModal {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        padding: 24px;
        position: fixed;
        top: 0;
        right: 0;

        img {
            cursor: pointer;
        }
    }
`;

export const ContainerPrincipal = styled.div`
    width: 816px;
    min-height: 585px;
    display: flex;
    gap: 40px;
    padding: 70px 40px 40px;
    position: relative;
    overflow: auto;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 35px 20px 20px;
        gap: 20px;
        width: 55rem;
    }

    @media (max-width: 620px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
        padding: 20px;
        width: 100%;
    }

    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        width: 100%;
    }
`;

export const ContainerSecundario = styled.div`
    overflow: auto;
`;
export const BotoesModal = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;

    @media (max-width: 900px) {
        gap: 10px;
    }

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ModalExtraDados = styled.div`
    height: 100%;
    margin: 0 40px;
    margin-bottom: 40px;

    h2 {
        color: #3e4756;
        font: normal normal medium 20px/26px Roboto;
    }

    table {
        width: 736px;
        margin-top: 16px;
        padding: 16px;
        text-align: left;
        margin-bottom: 16px;
        background-color: #f4f4f4;
        color: #3e4756;

        @media (max-width: 90rem) {
            width: 100%;
            overflow: auto;
        }

        thead {
            th {
                font-size: 16px;
                font-weight: 500;
            }
        }

        tbody {
            th {
                font-size: 16px;
                font-weight: 300;
            }
        }
    }
`;
export const ModalInativar = styled.div`
    height: 100%;
    margin: 0 40px;
    margin-bottom: 40px;

    h2 {
        color: #3e4756;
        font: normal normal medium 20px/26px Roboto;
        margin-bottom: 16px;
    }
`;

export const MotivoInativar = styled.div`
    padding: 16px;
    background-color: #f4f4f4;

    h3 {
        text-align: left;
        font: normal normal medium 16px/21px Roboto;
        letter-spacing: 0px;
        color: #3e4756;
        margin-bottom: 8px;
    }

    p {
        text-align: left;
        font: normal normal 300 16px/21px Roboto;
        letter-spacing: 0px;
        color: #3e4756;
    }
`;
