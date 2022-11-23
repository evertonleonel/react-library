import styled from 'styled-components';

export const HistoricoLivro = styled.div`
    width: 90%;
    padding: 40px;
    border: 1px solid #707070;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;

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

    tbody {
        .filtro-livro {
            position: relative;
        }

        .filtro-livro img {
            position: absolute;
            top: 55%;
            left: 20%;
        }
    }

    input {
        border: none;
        border-bottom: 2px solid #000000;
        width: 135px;
        height: 21px;
        outline: none;
        padding-left: 18%;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin: auto;
    }

    td,
    th {
        padding: 10px 40px;
        color: #000000;
        font-size: clamp(16px, 18px 21px);
    }

    th {
        background-color: #ffc501;
        text-align: left;
        font-weight: 600;
    }

    th:last-of-type {
        border-radius: 0px 5px 5px 0px;
    }

    th:first-of-type {
        border-radius: 5px 0px 0px 5px;
    }

    td {
        border-bottom: 2px solid #ddd;
        padding-top: 30px;
    }

    h2 {
        color: #3e4756;
        font-size: 20px;
        margin-bottom: 29px;
    }
`;

export const TabelaConteiner = styled.div`
    overflow-x: auto;
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
`;
