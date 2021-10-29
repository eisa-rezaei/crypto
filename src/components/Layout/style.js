import styled, { createGlobalStyle } from "styled-components";

export const StLayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 50px 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #181a1d;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*:before{
    margin: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}
body {
	line-height: 1;
    background-color: #1e2429;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
section {
    display: block;
}
input{
    border: none;
    outline: none;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
}
a {
    text-decoration: none;
    color: inherit;
}
button{
    border: none;
    background-color: inherit;
}
li {
    list-style: none;
}
ul {
    padding: 0;
}
section {
    padding: 0;
}
`;
