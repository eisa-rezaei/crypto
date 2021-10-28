import styled from "styled-components";

export const StCoinDetailChartsContainer = styled.section`
  width: 100%;
  min-height: 20vh;
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
  & h3 {
    font-size: 1.3rem;
  }
`;
export const StCoinDetailChartsHeaderInputs = styled.div`
  display: flex;
  align-items: center;
  & input {
    width: 200px;
    min-height: 45px;
    color: #fff;
    font-size: 0.9rem;
    text-align: left;
    margin: 0 10px;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #283035;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .abcd {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
    border-radius: 20px;
    overflow: hidden;

    & * {
      background-color: #283035;
      color: #fff;
      box-shadow: 0 0 0;
      background: #283035;
      :hover {
        color: black;
      }
    }
  }
`;

export const StCoinDetailChartsHeaderBtns = styled.div`
  & :nth-child(${(props) => props.days}) {
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

export const StCoinDetailChartsDescription = styled.div`
  width: 100%;
  min-height: 30vh;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StCoinDetailChartsDescriptionDetail = styled.div`
  width: 65%;
  height: auto;
  word-break: break-all;
  & h3 {
    font-size: 1.3rem;
  }
  & p {
    margin: 30px 0;
    color: #aaa;
    font-size: 0.7rem;
  }
`;

export const StCoinDetailChartsDescriptionPrices = styled.ul`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  & h3 {
    font-size: 1.3rem;
    margin: 10px 0;
  }
`;

export const StCoinDetailChartsDescriptionPricesItem = styled.li`
  margin-bottom: 20px;
  & span:nth-child(odd) {
    background-color: #e0e0e008;
    border-radius: 10px;
  }
  & span {
    margin: 10px 0px;
    padding: 0 20px;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p {
      margin: 30px 0;
      color: #aaa;
    }
    & h5 {
      display: flex;
      flex-direction: column;
    }
  }
`;
