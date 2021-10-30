import React from "react";
import CoinInfo from "../CoinInfo";
import { useSizeChecker } from "../Hook/useSizeChecker";
import InternalChart from "../InternalChart";
import {
  StSingleCoinInfoDetail,
  StSingleCoinInfoDetailPrice,
  StSingleCoinInfoDetailPricePart,
  StSingleCoinInfoListItem,
} from "./style";

const SingleCoinInfo = ({ id, name, symbol, image, market_data }) => {
  const current_price = market_data?.current_price;
  const usdChange24h =
    market_data?.market_cap_change_percentage_24h_in_currency;
  const total_volume = market_data?.total_volume;
  const market_cap = market_data?.market_cap;
  const market_cap_rank = market_data?.market_cap_rank;

  const size = useSizeChecker();

  return (
    <StSingleCoinInfoListItem>
      <CoinInfo
        name={name}
        image={image}
        symbol={symbol}
        id={id}
        rank={market_cap_rank}
      />
      <StSingleCoinInfoDetail>
        <StSingleCoinInfoDetailPrice isPriceUp={usdChange24h > 0}>
          <StSingleCoinInfoDetailPricePart>
            <h5>Price</h5>
            <span className="price-usd">
              $&nbsp;
              {current_price?.usd.toLocaleString("en").substring(0, 5)}
              &nbsp; <h5>USD</h5>
            </span>
            <span className="price">
              {current_price?.btc.toLocaleString("en")}
              &nbsp;BTC &nbsp;&nbsp;
              <p>{usdChange24h?.usd.toFixed(2)}%</p>
            </span>
          </StSingleCoinInfoDetailPricePart>
          {size ? (
            <>
              <StSingleCoinInfoDetailPricePart>
                <h5>Rank</h5>
                <span className="rank">Rank&nbsp;{market_cap_rank}</span>
              </StSingleCoinInfoDetailPricePart>
              <StSingleCoinInfoDetailPricePart>
                <h5>Health</h5>
                <span>Attractive</span>
              </StSingleCoinInfoDetailPricePart>
              <StSingleCoinInfoDetailPricePart>
                <h5>sentiment</h5>
                <span>Attractive</span>
              </StSingleCoinInfoDetailPricePart>
            </>
          ) : (
            <StSingleCoinInfoDetailPricePart>
              <InternalChart id={id} />
            </StSingleCoinInfoDetailPricePart>
          )}
        </StSingleCoinInfoDetailPrice>
        <StSingleCoinInfoDetailPrice>
          <StSingleCoinInfoDetailPricePart>
            <h5>Market Cap</h5>
            <span>
              $&nbsp;{market_cap?.usd.toLocaleString("en")}
              &nbsp;USD
            </span>
            <h5>
              {market_cap?.btc.toLocaleString("en")}
              &nbsp;BTC
            </h5>
          </StSingleCoinInfoDetailPricePart>
          <StSingleCoinInfoDetailPricePart>
            <h5>Volume</h5>
            <span>
              $&nbsp;
              {total_volume?.usd.toLocaleString("en")}
              &nbsp;USD
            </span>
            <h5>
              {total_volume?.btc.toLocaleString("en")}
              &nbsp;BTC
            </h5>
          </StSingleCoinInfoDetailPricePart>

          {size ? (
            <StSingleCoinInfoDetailPricePart>
              <InternalChart id={id} />
            </StSingleCoinInfoDetailPricePart>
          ) : null}
        </StSingleCoinInfoDetailPrice>
      </StSingleCoinInfoDetail>
    </StSingleCoinInfoListItem>
  );
};

export default SingleCoinInfo;
