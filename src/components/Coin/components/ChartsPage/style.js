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
    font-size: 0.9rem;
    text-align: left;
    margin: 0 10px;
    color: #fff;
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
      color: #fff;
      background-color: #283035;
      :hover {
        color: #283035;
      }
    }
  }
  .DatePicker__calendarContainer {
    height: auto;
  }
  .Calender__header {
    border-radius: 20px;
  }
  .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween) {
    color: orange;
  }
  .Calendar__weekDays {
    abbr {
      :hover {
        color: #fff;
      }
    }
  }
  .Calendar__yearSelectorWrapper::after {
    background-image: linear-gradient(
      to bottom,
      #283035,
      #283035 10%,
      rgba(245, 245, 245, 0)
    );
  }
  .Calendar__yearSelectorWrapper::before {
    background-image: linear-gradient(
      to top,
      #283035,
      #283035 10%,
      rgba(245, 245, 245, 0)
    );
  }
  .DatePicker__calendarArrow {
    border-color: transparent transparent #283035 transparent;
  }
  .-disabled {
    color: #000 !important;
  }
  .Calendar__yearSelector,
  .Calendar__monthSelector {
    button:disabled {
      color: #000;
      cursor: not-allowed;
    }
  }
  .Calendar__yearSelectorWrapper::before {
    height: 10px;
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
    transition: all 0.5s;
    :hover {
      color: #fff;
    }
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
    .change-price {
      color: ${(props) => (props.change ? `#0f0` : `#f00`)};
    }
  }
`;
