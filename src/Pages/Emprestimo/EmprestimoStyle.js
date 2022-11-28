import styled from 'styled-components';

export const ContainerTabela = styled.div`
    margin: 90px auto;
    overflow: auto;
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
        border-radius: 0%;
        border-bottom: 2px solid #000000;
        width: 135px;
        height: 21px;
        outline: none;
        padding: 0%;
        padding-bottom: 5px;
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

        img {
            margin: -20px 0px;
        }
    }

    tr {
        td:nth-child(3) {
            img {
                margin: -20px;
            }
        }
    }

    h2 {
        color: #3e4756;
        font-size: 20px;
        margin-bottom: 29px;
    }

    @media (max-width: 500px) {
        margin: 0 10px;
    }
`;

export const TabelaContent = styled.div`
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: auto;
`;
