import React from "react";
import AllCharts from "../../../AllCharts";

import {
  StCoinDetailChartsContainer,
  StCoinDetailChartsHeader,
  StCoinDetailChartsHeaderBtns,
  StCoinDetailChartsHeaderInputs,
} from "./style";

const ChartsPage = ({ name, id }) => {
  const CoinId = id?.toString();
  return (
    <StCoinDetailChartsContainer>
      <StCoinDetailChartsHeader>
        <h3>{name} Charts</h3>
        <StCoinDetailChartsHeaderBtns>
          <button type="button" onClick={true} id="day">
            Day
          </button>
          <button type="button" onClick={true} id="week">
            Week
          </button>
          <button type="button" onClick={true} id="month">
            Month
          </button>
          <button type="button" onClick={true} id="year">
            Year
          </button>
          <button type="button" onClick={true} id="all">
            All
          </button>
        </StCoinDetailChartsHeaderBtns>
        <StCoinDetailChartsHeaderInputs>
          <label htmlFor="start">From</label>
          <input placeholder="Start Date" name="start" id="start" />
          <label htmlFor="end">To</label>
          <input placeholder="End Date" name="end" id="end" />
        </StCoinDetailChartsHeaderInputs>
      </StCoinDetailChartsHeader>
      <AllCharts id={CoinId} marketChart limit={1} />
    </StCoinDetailChartsContainer>
  );
};

export default ChartsPage;
