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

export const StCoinDetail = styled.div`
  width: 100%;
  height: 320px;
  margin: 10px 0;
  padding: 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1e2429;
  border-radius: 20px;
`;

export const StPageCoinDetail = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const StCoinDetailPrice = styled.div`
  width: 100%;
  height: 50%;
  margin-left: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;
  & h5 {
    font-size: 0.8rem;
    color: #babbbb;
  }
  .price-usd {
    display: flex;
    align-items: flex-end;
    font-size: 1.5rem;
  }
  .price {
    display: flex;
    & p {
      font-size: 0.8rem;
      color: ${(props) => (props.isPriceUp ? `lightgreen` : `red`)};
    }
  }
`;
export const StCoinDetailPricePart = styled.div`
  min-width: 150px;
  min-height: 80px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  text-transform: capitalize;
  .rank {
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 20px;
    background-color: #2d5db6;
  }
`;

export const StCoinInfoDetailNewsCharts = styled.article`
  width: 100%;
  min-height: 40vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1e2429;
  border-radius: 20px;
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
`;
