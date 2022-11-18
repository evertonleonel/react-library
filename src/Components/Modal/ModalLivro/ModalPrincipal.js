import styled from "styled-components";

export const ImagemLivro = styled.img`
  width: 100%;
  max-width: 27.2rem;
  max-height: 39rem;
  object-fit: cover;
`
export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0,0,0,.4);
  display: flex;
  z-index: 100;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
`