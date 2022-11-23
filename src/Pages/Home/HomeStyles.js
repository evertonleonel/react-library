import styled from 'styled-components';

export const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 4rem;
    margin: 15rem auto;
    cursor: pointer;

    a {
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        color: #495057;
        outline: none;
    }

    @media (max-width: 920px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        margin: 10rem auto;
        gap: 3rem;
    }

    @media (max-width: 630px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        margin: 8rem auto;
        gap: 2rem;
    }
`;

export const Icone = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Span = styled.span`
    width: 244px;
    height: 71px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 3px;
    margin-left: 3px;
    margin-bottom: 3px;

    border-radius: 0px 0px 5px 5px;
    background-color: #fff;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 250px;
    height: 224px;
    border-radius: 5px;
    background-color: #f4f4f4;
    transition: background-color 300ms ease-in-out;
    transition: 0.3s;

    &:hover,
    &:focus {
        transform: scale3d(1.05, 1.05, 1);
        transition: box-shadow 300ms ease-in-out;
        background-color: #ffc501;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
`;
