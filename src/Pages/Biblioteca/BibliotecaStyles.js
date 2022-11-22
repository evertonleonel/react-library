import styled from "styled-components";

export const ImagemIcone = styled.img`
  position: absolute;
  margin: 18px 16px;
  width: 17px;
  height: 17px;
`
export const DivBuscar = styled.div`
  width: 666px;
  display:flex; 
  align-Items:center;
  border: 1px solid #ADB5BD;
  border-Radius: 5px;
  justify-Content: space-between;
  margin-right: 32px;

  &:hover{
   border-color: #FFC501;
   transition: 0.5s;
  }
`

export const SelectionFiltro = styled.select `
  width: 26rem;
  height: 53px;
  font: normal normal normal 16px;
  background-color: #FFFFFF;
  color: #ADB5BD;
  border: 1px solid #ADB5BD;
  border-radius: 5px;
  padding: 16px;
`
export const DivGaleria = styled.div`
  display: flex ;  
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 98px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

export const LivroDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F4F4F4;
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
    font-size:1.6rem;
    color: #3E4756;
    width: 120px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
`

export const LivroContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
  gap: 4rem;
  margin: 96px auto;
  width: 90%;
`

export const Image = styled.img`
  background-image: url('${ props => props.src }');
`
