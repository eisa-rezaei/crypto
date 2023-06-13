import React from "react";
import CoinInfo from "../CoinInfo";
import {useSizeChecker} from "../Hook/useSizeChecker";
import InternalChart from "../InternalChart";
import {
  StSingleCoinInfoDetail,
  StSingleCoinInfoDetailPrice,
  StSingleCoinInfoDetailPricePart,
  StSingleCoinInfoDetailPricePartRank,
  StSingleCoinInfoListItem,
} from "./style";


const SingleCoinInfo = ({
  id,
  name,
  symbol,
  image,
  market_cap,
  total_volume,
  price_change_percentage_24h,
  current_price,
  market_cap_rank,
}) => {
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
        <StSingleCoinInfoDetailPrice
          isPriceUp={price_change_percentage_24h > 0}
        >
          <StSingleCoinInfoDetailPricePart>
            <h5>Price</h5>
            <span className="price-usd">
              $&nbsp;
              {current_price?.toLocaleString("en")}
              &nbsp; <h5>USD</h5>
            </span>
            <span className="price">
              {current_price?.toLocaleString("en")}
              &nbsp;BTC &nbsp;&nbsp;
              <p>{price_change_percentage_24h?.toFixed(2)}%</p>
            </span>
          </StSingleCoinInfoDetailPricePart>
          {size ? (
            <>
              <StSingleCoinInfoDetailPricePartRank>
                <h5>Rank</h5>
                <span className="rank">Rank&nbsp;{market_cap_rank}</span>
              </StSingleCoinInfoDetailPricePartRank>
              <StSingleCoinInfoDetailPricePartRank>
                <h5>Health</h5>
                <span>Attractive</span>
              </StSingleCoinInfoDetailPricePartRank>
              <StSingleCoinInfoDetailPricePartRank>
                <h5>sentiment</h5>
                <span>Attractive</span>
              </StSingleCoinInfoDetailPricePartRank>
            </>
          ) : (
            <StSingleCoinInfoDetailPricePart>
              <h5>Volume</h5>
              <span>
                ${total_volume?.usd.toLocaleString("en")}
                &nbsp;USD
              </span>
              <h5>
                {total_volume?.btc.toLocaleString("en")}
                &nbsp;BTC
              </h5>
            </StSingleCoinInfoDetailPricePart>
          )}
        </StSingleCoinInfoDetailPrice>
        <StSingleCoinInfoDetailPrice>
          <StSingleCoinInfoDetailPricePart>
            <h5>Market Cap</h5>
            <span>
              $&nbsp;{market_cap?.toLocaleString("en")}
              &nbsp;USD
            </span>
            <h5>
              {market_cap?.toLocaleString("en")}
              &nbsp;BTC
            </h5>
          </StSingleCoinInfoDetailPricePart>
          <StSingleCoinInfoDetailPricePart>
            <h5>Volume</h5>
            <span>
              $&nbsp;
              {total_volume?.toLocaleString("en")}
              &nbsp;USD
            </span>
            <h5>
              {total_volume?.toLocaleString("en")}
              &nbsp;BTC
            </h5>
          </StSingleCoinInfoDetailPricePart>

          {size ? (
            <>
              <StSingleCoinInfoDetailPricePart>
                <h5>Volume</h5>
                <span>
                  ${total_volume?.usd.toLocaleString("en")}
                  &nbsp;USD
                </span>
                <h5>
                  {total_volume?.btc.toLocaleString("en")}
                  &nbsp;BTC
                </h5>
              </StSingleCoinInfoDetailPricePart>
              <StSingleCoinInfoDetailPricePart>
                <InternalChart id={id} />
              </StSingleCoinInfoDetailPricePart>
            </>
          ) : (
            <StSingleCoinInfoDetailPricePart phoneChart>
              <InternalChart id={id} />
            </StSingleCoinInfoDetailPricePart>
          )}
        </StSingleCoinInfoDetailPrice>
      </StSingleCoinInfoDetail>
    </StSingleCoinInfoListItem>
  );
};

export default SingleCoinInfo;
