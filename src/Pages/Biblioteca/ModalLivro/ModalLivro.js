import styled from "styled-components";

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

export const ImagemLivro = styled.img`
  width: 27.2rem;
  height: 39rem;
  object-fit: cover;
`

export const ModalLivroContent = styled.div`
	flex-direction: column;
	background-color: #fff;
	border: 1px solid #707070;
	overflow-wrap: normal;
	width: 816px;
	/* max-height: 825px; */
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);

`

export const ContainerEsquerdo = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ContainerDireito = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
  width: 100%;

  h2,h3,p {
    color: #3E4756
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 24px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  .BotaoFecharModal{
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
`

export const ContainerPrincipal = styled.div`
	width: 816px;
	min-height: 585px;
	display: flex;
	gap: 40px;
	padding: 70px 40px 40px;
	position: relative;
`
export const BotoesModal = styled.div`
  display: flex;
	gap: 24px;
	justify-content: center;
`