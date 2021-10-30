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
  min-height: ${(props) => (props.styled ? `80vh` : `45vh`)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  & p {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    min-height: ${(props) => (props.styled ? `80vh` : `auto`)};
    padding: 0;
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StLoadingLogoContainer = styled.div`
  width: 150px;
  margin: 60px auto;
  position: relative;
  font-size: 4rem;
  & svg:first-child {
    color: #fff;
    animation: ${(props) => (props.styled ? rotateRevers : rotate)} 1.5s
      ease-in-out infinite;
  }
  & svg:last-child {
    color: #c073c5;
    font-size: 3rem;
    position: absolute;
    top: 43px;
    right: 30px;
    animation: ${(props) => (props.styled ? rotate : rotateRevers)} 1.5s
      ease-in-out infinite;
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    margin: 10px auto;
    font-size: 2rem;
    & svg:first-child {
      top: 25px;
      right: 20px;
      font-size: 2rem;
    }
    & svg:last-child {
      top: 15px;
      right: 18px;
      font-size: 3rem;
    }
  }
`;
