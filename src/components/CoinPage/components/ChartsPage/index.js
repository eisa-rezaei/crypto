import React, {useState} from "react";
import CoinChart from "../../CoinChart";
import DatePicker, {utils} from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {useSizeChecker} from "../../../Hook/useSizeChecker";
import {Description} from "../../../../data/data";

import {
  StCoinDetailChartsContainer,
  StCoinDetailChartsDescription,
  StCoinDetailChartsDescriptionDetail,
  StCoinDetailChartsDescriptionPrices,
  StCoinDetailChartsDescriptionPricesItem,
  StCoinDetailChartsDescriptionPricesItemData,
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
    priceNum,
  }) => {
    const [days, setDays] = useState(30);
    const [selectedStartDay, setSelectedStartDay] = useState(null);
    const [selectedEndDay, setSelectedEndDay] = useState(null);

    const size = useSizeChecker();

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

    const yesterDayPrice = +priceNum - change;

    const oneDayAfter = {...selectedStartDay, day: selectedStartDay?.day + 1};

    const daysHandler = (day) => () => {
      setDays(day);
      setSelectedStartDay(null);
      setSelectedEndDay(null);
    };

    const DESCRIPTION = Description(name, description);

    const COIN_PAGE_BTNS_TITLE = [
      {title: "Day", value: 1},
      {title: "Week", value: 7},
      {title: "Month", value: 30},
      {title: "Year", value: 360},
      {title: "All", value: 720},
    ];

    return (
      <StCoinDetailChartsContainer>
        <StCoinDetailChartsHeader>
          <h3>
            {name}&nbsp;{size && "Chart"}
          </h3>
          <StCoinDetailChartsHeaderBtns days={timeBg[days]}>
            {COIN_PAGE_BTNS_TITLE.map(({title, value}) => (
              <button type="button" onClick={daysHandler(value)} key={value}>
                {title}
              </button>
            ))}
          </StCoinDetailChartsHeaderBtns>
          {size && (
            <StCoinDetailChartsHeaderInputs>
              <label htmlFor="start">From</label>
              <DatePicker
                value={selectedStartDay}
                maximumDate={utils().getToday()}
                onChange={setSelectedStartDay}
                minimumDate={minimumDate}
                inputPlaceholder="Start Date"
                calendarClassName="abcd"
              />
              <label htmlFor="end">To</label>
              <DatePicker
                value={selectedEndDay}
                maximumDate={utils().getToday()}
                minimumDate={oneDayAfter}
                inputPlaceholder="End Date"
                onChange={selectedStartDay && setSelectedEndDay}
                calendarClassName="abcd"
              />
            </StCoinDetailChartsHeaderInputs>
          )}
        </StCoinDetailChartsHeader>
        <CoinChart
          id={id}
          limit={days}
          selectedStartDay={new Date(
            `${selectedStartDay?.year}.${selectedStartDay?.month}.${selectedStartDay?.day}`
          ).getTime()}
          selectedEndDay={new Date(
            `${selectedEndDay?.year}.${selectedEndDay?.month}.${selectedEndDay?.day}`
          ).getTime()}
        />
        <StCoinDetailChartsHeaderInputs>
          <label htmlFor="start">From</label>
          <DatePicker
            value={selectedStartDay}
            maximumDate={utils().getToday()}
            onChange={setSelectedStartDay}
            minimumDate={minimumDate}
            inputPlaceholder="Start Date"
            calendarClassName="abcd"
          />
          <label htmlFor="end">To</label>
          <DatePicker
            value={selectedEndDay}
            maximumDate={utils().getToday()}
            minimumDate={oneDayAfter}
            inputPlaceholder="End Date"
            onChange={selectedStartDay && setSelectedEndDay}
            calendarClassName="abcd"
          />
        </StCoinDetailChartsHeaderInputs>
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
            <h3>{size && name} Price Today</h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>{size && name} Price Today</p>
                <h5>${price} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>24 Hour High / Low </p>
                <span>
                  <h6>${low} USD</h6>
                  <h6>${high} USD</h6>
                </span>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>24 Hour vulome</p>
                <h5>{volume} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>Yesterday's {name} Price </h3>
            <StCoinDetailChartsDescriptionPricesItem change={change > 0}>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>YesterDay Price</p>
                <h5>
                  $
                  {yesterDayPrice > 100
                    ? yesterDayPrice.toFixed(0)
                    : yesterDayPrice.toFixed(2)}
                  &nbsp;USD
                </h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>Changes 24H</p>
                <h5 className="change-price">
                  $
                  {Math.abs(change) > 1
                    ? change?.toFixed(2)
                    : change?.toFixed(3)}
                  &nbsp;USD
                </h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p> Percentage 24 H</p>
                <h5 className="change-price">{percentage} %</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>History {name} Price </h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>{name}</p>
                <h5>{price} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>{name}</p>
                <h5>{price} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
            </StCoinDetailChartsDescriptionPricesItem>
            <h3>{name} Supply Price </h3>
            <StCoinDetailChartsDescriptionPricesItem>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p> circulating Supply</p>
                <h5>{cir_supply} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>total Supply</p>
                <h5>{total_supply} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
              <StCoinDetailChartsDescriptionPricesItemData>
                <p>Max Supply</p>
                <h5>{maxSupply} USD</h5>
              </StCoinDetailChartsDescriptionPricesItemData>
            </StCoinDetailChartsDescriptionPricesItem>
          </StCoinDetailChartsDescriptionPrices>
        </StCoinDetailChartsDescription>
      </StCoinDetailChartsContainer>
    );
  }
);

export default ChartsPage;
