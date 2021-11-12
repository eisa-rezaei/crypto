import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
        color: #fff;
    }
    50% {
        transform: rotate(180deg); 
        color: #c073c5;
    }
    100% {
        transform: rotate(0);
        color: #fff;
    }
`;
const rotateRevers = keyframes`
    0% {
        transform: rotate(180deg);
        color: #c073c5;
    }
    50% {
        transform: rotate(0deg); 
        color: #fff;
    }
     100% {
        transform: rotate(180deg); 
        color: #c073c5;
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
    padding: 0px;
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StLoadingLogoContainer = styled.div`
  width: 150px;
  margin: 60px auto;
  position: relative;
  & svg {
    :first-child {
      font-size: 4rem;
      top: -40px;
      right: -10px;
      color: #fff;
      position: absolute;
      animation: ${(props) => (props.styled ? rotateRevers : rotate)} 2.5s
        ease-in-out infinite;
    }
    :last-child {
      color: #c073c5;
      font-size: 3rem;
      position: absolute;
      top: 3px;
      right: 50px;
      animation: ${(props) => (props.styled ? rotate : rotateRevers)} 2.5s
        ease-in-out infinite;
    }
  }

  @media (max-width: 750px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    font-size: 2rem;
    & svg {
      :first-child {
        top: 10px;
        right: 32px;
        font-size: 2rem;
      }
      :last-child {
        top: 33px;
        right: -3px;
        font-size: 3rem;
      }
    }
  }
`;
