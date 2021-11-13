import styled from "styled-components";

export const StCoinContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StCoinInfoDetailNewsCharts = styled.article`
  width: 100%;
  min-height: 40vh;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1e2429;
  border-radius: 20px;
  @media (max-width: 750px) {
    padding: 5px 10px;
  }
`;
export const StCoinInfoDetailNav = styled.nav`
  width: 100%;
  display: flex;
  border-bottom: 2px solid #181a1d;
  & button {
    color: #fff;
    padding: 20px;
    cursor: pointer;
  }
  & :nth-child(${(props) => (props.newsPage ? `2` : `1`)}) {
    border-bottom: 2px solid #f8c02d;
  }
  @media (max-width: 750px) {
    border-bottom: 1px solid #181a1d;
    & button {
      padding: 15px;
      font-size: 0.8rem;
    }
  }
`;
