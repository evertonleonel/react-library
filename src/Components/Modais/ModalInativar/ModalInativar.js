import styled from 'styled-components';

export const InativarLivro = styled.div`
    background-color: #fff;
    padding: 40px;
    height: 336px;
    width: 804px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    @media (max-width: 9rem) {
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }

    h2 {
        font-size: 20px;
        color: #3e4756;
        font-weight: 500;
    }

    form {
        display: flex;
        flex-direction: column;

        textarea {
            width: 724px;
            height: 129px;
            margin: 24px 0;
            border: 1px solid #133052;
            border-radius: 5px;
            position: relative;
            padding: 16px;
            resize: none;

            &::placeholder {
                font-size: 16px;
                color: #133052;
                font-weight: 400;
            }
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
