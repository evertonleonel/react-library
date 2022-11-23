import styled from 'styled-components';

export const EmprestarLivro = styled.div`
    width: 805px;
    height: 353px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #707070;
    padding: 40px;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 0);
    color: #3e4756;

    form {
        margin-top: 21px;
        margin-bottom: 40px;
        display: flex;
        gap: 23px;
        flex-wrap: wrap;

        input {
            border: 1px solid #133052;
            width: 350px;
            height: 53px;
            border-radius: 5px;
            padding: 16px;
        }

        input:focus {
            border: 1px solid #ffc501;
        }
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
