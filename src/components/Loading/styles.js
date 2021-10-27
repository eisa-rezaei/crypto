import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg); 
    }
`;
const rotateRevers = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(0deg); 
    }
`;

export const StLoadingContainer = styled.main`
  width: 100%;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  & p {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StLoadingLogoConatainer = styled.div`
  width: 150px;
  margin: 60px auto;
  position: relative;
  font-size: 4rem;
  & svg:first-child {
    color: #fff;
    animation: ${(props) => (props.styled ? rotateRevers : rotate)} 1s linear
      infinite;
  }
  & svg:last-child {
    color: #c073c5;
    font-size: 3rem;
    position: absolute;
    top: 43px;
    right: 30px;
    animation: ${(props) => (props.styled ? rotate : rotateRevers)} 1s linear
      infinite;
  }
`;
