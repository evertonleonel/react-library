import styled from 'styled-components';
import { animationModal } from '../../GlobalStyles/styles';

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
    animation: ${animationModal} 0.3s forwards;

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 23px;

        margin-top: 21px;
        margin-bottom: 40px;

        @media (max-width: 90rem) {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }

        input {
            width: 350px;
            border: 1px solid #133052;
            height: 53px;
            border-radius: 5px;
            padding: 16px;

            @media (max-width: 90rem) {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }
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
