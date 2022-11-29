import styled from 'styled-components';

export const ImagemIcone = styled.img`
    position: absolute;
    margin: 18px 16px;
    width: 17px;
    height: 17px;
`;
export const DivBuscar = styled.div`
    width: 666px;
    display: flex;
    align-items: center;
    border: 1px solid #adb5bd;
    border-radius: 5px;
    justify-content: space-between;
    margin-right: 32px;

    &:hover {
        border-color: #ffc501;
        transition: 0.5s;
    }
`;

export const PesquisaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

    @media (max-width: 960px) {
        width: 500px;
        width: 100%;
        justify-content: center;
        margin: 0 10px;
        gap: 30px;
    }

    @media (max-width: 570px) {
        gap: 20px;
    }
`;

export const SelectionFiltro = styled.select`
    width: 26rem;
    height: 53px;
    font: normal normal normal 16px;
    background-color: #ffffff;
    color: #adb5bd;
    border: 1px solid #adb5bd;
    border-radius: 5px;
    padding: 16px;
    font-size: 16px;
`;
export const DivGaleria = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 98px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const LivroDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    padding: 24px;
    gap: 16px;
    border-radius: 5px;
    max-height: 261px;
    max-width: 196px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale3d(1.1, 1.1, 1);
        transition: box-shadow 300ms ease-in-out;
        box-shadow: 0px 0px 10px rgba(0, 0, 100, 0.5);
    }

    img {
        width: 108px;
        height: 155px;
    }

    h2 {
        text-align: center;
        font-size: 1.6rem;
        color: #3e4756;
        width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const LivroContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
    gap: 4rem;
    margin: 96px auto;
    width: 90%;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Image = styled.img`
    background-image: url('${(props) => props.src}');
`;
