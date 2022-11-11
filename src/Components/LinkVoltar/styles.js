import styled from "styled-components"

export const LinkContainer = styled.nav`
  font-size: clamp(2rem, 1rem + 1.5vw, 2.6rem);
  position: absolute;
  top: 24px;
  left: calc(24px + 1.82%);
  
  a{
    text-decoration: none;
    color: #00000080;
    margin-right: 8px;
  }

  :nth-child(1){
    img {
      margin-right: 8px;
      height: 16px;
      width: 9px;
    }
  }
`