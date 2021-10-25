import styled from "styled-components";

export const StHomeContainer = styled.div`
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StHomeCoinListContainer = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StHomeCoinListItem = styled.li`
  width: 100%;
  height: 300px;
  margin: 10px 0;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1e2429;
  border-radius: 20px;
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
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 0.8rem;
  & h5 {
    font-size: 0.8rem;
    color: #babbbb;
  }
`;
export const StHomeCoinDetailPricePart = styled.div`
  min-width: 100px;
  min-height: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  text-transform: capitalize;
`;
