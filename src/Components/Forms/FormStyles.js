import styled from "styled-components";

export const LoginButton = styled.button`
  width: 100%;
  max-width: 353px;
  height: 45px;
  color: #000000;
  background-color: #FFC501;

  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;

  outline: none;
  position: relative;
  cursor:pointer;

  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: transparent;
    transition: all .5s;
  }

  &:hover:before,
  &:focus:before {
    background: rgba(0, 0, 0, .2);
    box-shadow: 0 0 10px #FFC501;
  };
  
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`

export const LoginInput = styled.input`
  
  width: 353px;
  height: 51px;
  font-size: 14px;
  padding: 16px;
  padding-right: 35px;
  margin-bottom: 16px;

  border-radius: 4px;
  border: none;
  outline: none;
  background-color:#F1F3F5;
  text-align: left;

  &::placeholder {
    color: #868E96;
    font-size: calc(14px, 16px, 19px);
  }
`