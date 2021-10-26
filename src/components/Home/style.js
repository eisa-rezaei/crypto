import styled from "styled-components";

export const StHomeContainer = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const StHomeCoinListContainer = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const StHomeCoinListItem = styled.li`
  width: 100%;
  height: 320px;
  margin: 10px 0;
  padding: 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 20px;
  background-color: #1e2429;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 15px 30px rgba(200, 200, 200, 0.2);
  }
`;

export const StHomeCoinDetail = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const StHomeCoinDetailPrice = styled.div`
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
export const StHomeCoinDetailPricePart = styled.div`
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
