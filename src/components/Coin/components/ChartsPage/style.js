import styled from "styled-components";

export const StCoinDetailChartsContainer = styled.section`
  width: 100%;
  min-height: 50vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StCoinDetailChartsHeader = styled.header`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StCoinDetailChartsHeaderInputs = styled.header`
  display: flex;
  align-items: center;
  & input {
    width: 200px;
    color: #fff;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #283035;
  }
`;

export const StCoinDetailChartsHeaderBtns = styled.div`
  & :nth-child(1) {
    color: #fff;
    background-color: #2a67c2;
  }
  & button {
    color: #3b4851;
    cursor: pointer;
    padding: 8px 20px;
    border-radius: 10px;
  }
`;
