import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    background-color: #F4F4F4;
  }
`;

export const ContainerMain = styled.main`
    width: 100%;
    max-width: 1318px;
    margin: 24px auto;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 920px) {
        margin: 24px;
    }

    @media (max-width: 630px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

export const LoginLogo = styled.img`
    width: 12rem;
    height: 4.8rem;
    margin-bottom: 5.6rem;
    margin-top: 5.6rem;
`;

export const animationModal = keyframes`
  from{
    opacity: 0;
    transform: translateZ(2px)
  }   

  to{
    opacity: 1;
    transform: translateZ(initial);
  }
      
    
`;
