import React from "react";
import { marketData } from "../../../../data/data";
import {
  StCoinDetailNewsContainer,
  StNewsContainer,
  StSingleNews,
  StSingleNewsImgContainer,
  StSingleNewsInfo,
  StSingleNewsInfoFooter,
} from "./style";

const NewsPage = () => {
  const newsTimeHandler = (date) => {
    const dateMillisecond = new Date(date).getTime();
    const now = new Date().getTime();
    const deference = now - dateMillisecond;
    const time = +(deference / (24 * 60 * 60 * 1000)).toFixed(2);
    if (time > 360) {
      return `${(time / 360).toFixed(0)} Years Ago`;
    }
    if (time < 360 && time > 30) {
      return `${(time / 30).toFixed(0)} months Ago`;
    }
    if (time < 30 && time > 7) {
      return `${(time / 7).toFixed(0)} weeks Ago`;
    }
    if (time < 7 && time > 1) {
      return `${time.toFixed(0)} days Ago`;
    }
    if (time < 1 && time > 1 / 24) {
      return `${(deference / (60 * 60 * 1000)).toFixed(0)} Hours Ago`;
    }
    if (time < 1 / 24) {
      return `${(deference / (60 * 1000)).toFixed(0)} Minutes Ago`;
    }
  };

  return (
    <StCoinDetailNewsContainer>
      <StNewsContainer>
        {marketData.map(({ title, color, newsAgency, date }) => (
          <StSingleNews>
            <StSingleNewsImgContainer color={color} />
            <StSingleNewsInfo>
              <h1>{title}</h1>
              <StSingleNewsInfoFooter color={color}>
                <span>
                  <p />
                  {newsAgency}
                </span>
                <p>{newsTimeHandler(date)}</p>
              </StSingleNewsInfoFooter>
            </StSingleNewsInfo>
          </StSingleNews>
        ))}
      </StNewsContainer>
    </StCoinDetailNewsContainer>
  );
};

export default NewsPage;
