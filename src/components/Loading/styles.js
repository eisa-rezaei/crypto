import styled, {keyframes} from "styled-components";

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
      animation: ${(props) => (props.styled ? rotateRevers : rotate)} 1.5s
        ease-in-out infinite;
    }
    :last-child {
      color: #c073c5;
      font-size: 3rem;
      position: absolute;
      top: 3px;
      right: 50px;
      animation: ${(props) => (props.styled ? rotate : rotateRevers)} 1.5s
        ease-in-out infinite;
    }
  }

  @media (max-width: 700px) {
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
