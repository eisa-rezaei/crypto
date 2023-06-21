import styled from "styled-components";

export const StCoinDetailNewsContainer = styled.section`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StNewsContainer = styled.ul`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const StSingleNews = styled.li`
  width: 260px;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #1c2024;
  @media (max-width: 750px) {
    width: 100%;
    margin: 20px 0;
  }
`;
export const StSingleNewsInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const StSingleNewsInfoFooter = styled.footer`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;

  & p {
    color: #aaa;
  }

  & span {
    min-width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: ${(props) => props.color};
    }
  }
`;

export const StSingleNewsImgContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${(props) => props.color};
`;
