import styled from 'styled-components';

export const LoginButton = styled.button`
    width: 100%;
    max-width: ${(props) => props.width || '353px'};
    min-height: ${(props) => props.height || '45px'};
    color: ${(props) => props.color || '#000000'};
    background-color: ${(props) => props.cor || '#FFC501'};
    border: ${(props) => props.border || '1px solid #133052'};
    border-radius: 4px;
    font-weight: ${(props) => props.weight || 'bold'};
    font-size: 16px;
    outline: none;
    position: relative;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: transparent;
        transition: all 0.5s;
    }

    &:hover:before,
    &:focus:before {
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px #ffc501;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;

export const LoginInput = styled.input`
    width: 353px;
    height: ${(props) => props.height || '52px'};
    font-size: 14px;
    padding: 16px;
    padding-right: 35px;
    margin-bottom: 16px;

    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #f1f3f5;
    text-align: left;

    &::placeholder {
        color: #868e96;
        font-size: calc(14px, 16px, 19px);
    }

    span {
        position: absolute;
        top: 0;
    }

    @media (max-width: 398px) {
        width: 100%;
    }
`;

export const InputLoginContainer = styled.div`
    position: relative;

    span {
        position: absolute;
        top: 25%;
        left: 90%;
    }
`;

export const ErrorInput = styled.p`
    font-size: 1.5rem;
    color: #fb1;
    margin-bottom: 3px;
    margin-left: 10px;
`;

export const InputGeral = styled.input`
    width: 100%;
    /* max-width: 350px; */
    max-height: 53px;
    padding: 16px;
    background-color: #ffffff;
    color: #133052;
    text-align: left;
    font-size: clamp(16px, 18px, 21px);
    border-radius: 5px;
    border: ${(props) => props.border || '1px solid #133052'};
    outline: none;

    &::placeholder {
        color: #133052;
        font-size: calc(14px, 16px, 19px);
    }
`;

export const InputTextArea = styled.textarea`
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
