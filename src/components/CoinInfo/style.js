import styled from "styled-components";

export const StHomeCoinInfo = styled.div`
  width: clamp(200px, 300px, 400px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 700px) {
    height: auto;
    justify-content: flex-start;
    align-self: flex-start;
  }
`;
export const StHomeCoinInfoTitle = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & svg {
    color: orange;
    cursor: pointer;
  }
  & img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
  & span {
    width: 13vw;
    margin-left: 20px;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    & p {
      font-size: 1rem;
      margin-top: 5px;
      color: #babbbb;
    }
  }
  & .rank {
    margin-left: 20px;
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 20px;
    background-color: #2d5db6;
  }
  @media (max-width: 700px) {
    width: 80vw;
    & span {
      width: 20vw;
      font-size: 1rem;
      margin-left: 0px;
      & p {
        font-size: 0.7rem;
      }
    }
    & img {
      width: 45px;
      height: 45px;
    }
  }
`;

export const StHomeCoinInfoLinks = styled.ul`
  width: 100%;
  color: #babbbb;
  margin-top: 20px;
  margin-left: 15px;
  font-size: 0.8rem;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const StHomeCoinInfoLink = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  & svg {
    margin: 0 10px;
  }
  & a {
    & :last-child {
      color: #155ebb;
      margin-right: 0;
    }
    :hover {
      color: #fff;
    }
  }
`;
