import styled from "styled-components";

export const StSingleCoinInfoListItem = styled.li`
  width: 100%;
  height: 320px;
  margin: 10px 0;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: 20px;
  background-color: #1e2429;
  transition: all 0.6s ease-in;
  :hover {
    box-shadow: 0px 15px 30px rgba(0 0 0 / 44%);
  }

  @media (max-width: 700px) {
    height: auto;
    padding: 10px 0px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

export const StSingleCoinInfoDetail = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 700px) {
    height: auto;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StSingleCoinInfoDetailPrice = styled.div`
  width: 100%;
  height: 50%;
  margin-left: 3vw;
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
      color: ${(props) =>
        props.isPriceUp ? `lightgreen` : `rgba(242, 38, 19, 1)`};
    }
  }
  @media (max-width: 700px) {
    height: auto;
    justify-content: space-between;
    margin-left: 0;
    font-size: 0.6rem;
    .price-usd {
      font-size: 0.8rem;
    }
    & h5 {
      font-size: 0.6rem;
    }
  }
`;
export const StSingleCoinInfoDetailPricePart = styled.div`
  min-width: 100px;
  min-height: 90px;
  margin-right: 7vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  text-transform: capitalize;
  & .rank {
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 20px;
    background-color: #2d5db6;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 10px 0;
    min-height: 60px;
    min-width: ${(props) => (props.phoneChart ? `160px` : `100px`)};
    margin-right: ${(props) => (props.phoneChart ? `0` : `2vw`)};
    justify-content: space-between;
  }
`;
