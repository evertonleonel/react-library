import styled from "styled-components";

export const ImgCapa = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  width: 172px;
  height: 206px;
  color: #FFC501 ;
  font-size: 20px;
  font-weight: 500;
  
  border: 2px dashed currentColor;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;

  &::after {
    content: '';
    display: block;
  }
`

export const NovoLivro = styled.form` 
  display: flex;
	/* align-items: center; */
	justify-content: center;
	flex-wrap: wrap;
 
  .sinopse {
  
     /* @media (max-width: 999px) {
      margin: 1rem auto;
      width: 55%;
    } */
}

.botoes {
  width: 14.3rem;
  height: 5.3rem;
  font-size: clamp(14px,16px,18px);
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}
`

export const InputContainer = styled.div`
  background-color: tomato;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 350px);
  grid-row: 53px;
  /* grid-template-areas: 
  '  titulo autor'
  '  sinopse genero'
  '  sinopse dataentrada'; */
 
  
  :nth-child(1) {
  grid-area: titulo;
}

  :nth-child(2) {
    grid-area: autor;
  }

  :nth-child(3) {
    grid-area: sinopse;
  }
  :nth-child(4) {
    grid-area: genero;
  }
  :nth-child(5) {
    grid-area: dataentrada;
  }

  .dataInput {
  position: relative;
}
`
export const DivBotoes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

`
