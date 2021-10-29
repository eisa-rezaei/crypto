import styled from "styled-components";

export const StCoinDetailChartsContainer = styled.section`
  width: 100%;
  min-height: 20vh;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 700px) {
    padding: 10px 0;
  }
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
  @media (max-width: 700px) {
    font-size: 0.4rem;
    & h3 {
      font-size: 0.6rem;
    }
  }
`;
export const StCoinDetailChartsHeaderInputs = styled.div`
  display: flex;
  align-items: center;
  & input {
    width: 15vw;
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
  @media (max-width: 700px) {
    & input {
      min-height: 30px;
      font-size: 0.4rem;
      padding: 2px 4px;
      margin: 0;
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
    transition: all 0.5s;
    :hover {
      color: #fff;
    }
  }
  @media (max-width: 700px) {
    & button {
      font-size: 0.4rem;
      padding: 4px;
      border-radius: 50%;
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
  & h3 {
    font-size: 1.3rem;
  }
  & p {
    word-break: break-all;
    margin: 30px 0;
    color: #aaa;
    font-size: 0.7rem;
  }
  @media (max-width: 700px) {
    & h3 {
      font-size: 0.9rem;
    }
    & p {
      margin: 15px 0;
      font-size: 0.4rem;
    }
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
  @media (max-width: 700px) {
    & h3 {
      font-size: 0.9rem;
      text-align: center;
    }
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
      text-align: center;
    }
    .change-price {
      color: ${(props) => (props.change ? `#0f0` : `#f00`)};
    }
  }
  @media (max-width: 700px) {
    & span {
      margin: 10px 0;
      padding: 0;
      font-size: 0.4rem;
      flex-direction: column;
      justify-content: center;
      & p {
        margin: 10px 0;
        color: #aaa;
      }
    }
  }
`;
