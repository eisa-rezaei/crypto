import React, { useState } from "react";
import CoinChart from "../../CoinChart";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import {
  StCoinDetailChartsContainer,
  StCoinDetailChartsDescription,
  StCoinDetailChartsDescriptionDetail,
  StCoinDetailChartsDescriptionPrices,
  StCoinDetailChartsDescriptionPricesItem,
  StCoinDetailChartsHeader,
  StCoinDetailChartsHeaderBtns,
  StCoinDetailChartsHeaderInputs,
} from "./style";

const ChartsPage = React.memo(
  ({
    name,
    id,
    description,
    price,
    low,
    high,
    volume,
    maxSupply,
    change,
    cir_supply,
    total_supply,
    percentage,
  }) => {
    const newDescription = description?.slice(0, 600);
    const DESCRIPTION = [
      {
        title: `About ${name}`,
        description: newDescription,
      },
      {
        title: `What is  ${name}`,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing  tempora perspiciatis iure quidemcorrupti, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
      },
      {
        title: `How much ${name} is in circlulation?`,
        description: newDescription,
      },
      {
        title: `About ${name}`,
        description:
          "Lorem ipsum dolor sit amet, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
      },
      {
        title: `Who are the founders of ${name}?`,
        description: newDescription,
      },
      {
        title: `What makes ${name} unique?`,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipiscimaiores voluptatibus tenetur tempora perspiciatis iure quidemcorrupti, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
      },
      {
        title: `How much ${name} is in circlulation?`,
        description: newDescription,
      },
      {
        title: `How is the ${name} network is secured?`,
        description:
          "Lorem ipsum  quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
      },
    ];

    const [days, setDays] = useState(30);
    const [selectedStartDay, setSelectedStartDay] = useState(null);
    const [selectedEndDay, setSelectedEndDay] = useState(null);

    const timeBg = {
      1: 1,
      7: 2,
      30: 3,
      360: 4,
      720: 5,
    };

    const minimumDate = {
      year: 2018,
      month: 1,
      day: 1,
    };

    const yesterDayPrice = +price?.replace(/\D/g, "") - change;

    const oneDayAfter = { ...selectedStartDay, day: selectedStartDay?.day + 1 };

    const daysHandler = (day) => () => {
      setDays(day);
      setSelectedStartDay(null);
      setSelectedEndDay(null);
    };

    return (
      <StCoinDetailChartsContainer>
        <StCoinDetailChartsHeader>
          <h3>{name} Charts</h3>
          <StCoinDetailChartsHeaderBtns days={timeBg[days]}>
            <button type="button" id="day" onClick={daysHandler(1)}>
              Day
            </button>
            <button type="button" id="week" onClick={daysHandler(7)}>
              Week
            </button>
            <button type="button" id="month" onClick={daysHandler(30)}>
              Month
            </button>
            <button type="button" id="year" onClick={daysHandler(360)}>
              Year
            </button>
            <button type="button" id="all" onClick={daysHandler(720)}>
              All
            </button>
          </StCoinDetailChartsHeaderBtns>
          <StCoinDetailChartsHeaderInputs>
            <label htmlFor="start">From</label>
            <DatePicker
              value={selectedStartDay}
              maximumDate={utils().getToday()}
              onChange={setSelectedStartDay}
              minimumDate={minimumDate}
              inputPlaceholder="Select a day"
              calendarClassName="abcd"
            />
            <label htmlFor="end">To</label>
            <DatePicker
              value={selectedEndDay}
              maximumDate={utils().getToday()}
              minimumDate={oneDayAfter}
              inputPlaceholder="Select a day"
              onChange={selectedStartDay && setSelectedEndDay}
              calendarClassName="abcd"
            />
          </StCoinDetailChartsHeaderInputs>
        </StCoinDetailChartsHeader>
        <CoinChart
          id={id?.toString()}
          limit={days}
          selectedStartDay={new Date(
            `${selectedStartDay?.year}.${selectedStartDay?.month}.${selectedStartDay?.day}`
          ).getTime()}
          selectedEndDay={new Date(
            `${selectedEndDay?.year}.${selectedEndDay?.month}.${selectedEndDay?.day}`
          ).getTime()}
        />
        <StCoinDetailChartsDescription>
          <StCoinDetailChartsDescriptionDetail>
            {DESCRIPTION.map((item, index) => (
              <span key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </span>
            ))}
          </StCoinDetailChartsDescriptionDetail>
          <StCoinDetailChartsDescriptionPrices>
            <h3>{name} Price Today</h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <span>
                <p>{name} Price Today</p>
                <h5>{price}</h5>
              </span>
              <span>
                <p>24 Hour High / Low </p>
                <h5>
                  <h6>${low} USD</h6>
                  <h6>${high} USD</h6>
                </h5>
              </span>
              <span>
                <p>24 Hour vulome</p>
                <h5>{volume} USD</h5>
              </span>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>Yesterday's {name} Price </h3>
            <StCoinDetailChartsDescriptionPricesItem change={change > 0}>
              <span>
                <p>YesterDay Price</p>
                <h5>{yesterDayPrice.toFixed(0)} USD</h5>
              </span>
              <span>
                <p>{name} Changes 24H</p>
                <h5 className="change-price">${change} USD</h5>
              </span>
              <span>
                <p>{name} Percentage 24 H</p>
                <h5 className="change-price">{percentage} %</h5>
              </span>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>History {name} Price </h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <span>
                <p>{name}</p>
                <h5>{price} USD</h5>
              </span>
              <span>
                <p>{name}</p>
                <h5>{price} USD</h5>
              </span>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>{name} Supply Price </h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <span>
                <p> circulating Supply</p>
                <h5>{cir_supply} USD</h5>
              </span>
              <span>
                <p>total Supply</p>
                <h5>{total_supply} USD</h5>
              </span>
              <span>
                <p>Max Supply</p>
                <h5>{maxSupply} USD</h5>
              </span>
            </StCoinDetailChartsDescriptionPricesItem>
          </StCoinDetailChartsDescriptionPrices>
        </StCoinDetailChartsDescription>
      </StCoinDetailChartsContainer>
    );
  }
);

export default ChartsPage;
