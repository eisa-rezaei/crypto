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
  market_data,
  market_cap_rank,
  isSingleCoinPage,
}) => {
  const size = useSizeChecker();

  const imagePic = isSingleCoinPage ? image?.large : image;
  const isPriceUp = isSingleCoinPage
    ? market_data?.price_change_percentage_24h > 0
    : price_change_percentage_24h > 0;

  const market_cap_data_usd = isSingleCoinPage
    ? market_data?.market_cap.usd
    : market_cap;

  const market_cap_data_btc = isSingleCoinPage;

  const current_price_data = isSingleCoinPage
    ? market_data?.current_price.usd
    : current_price;

  return (
    <StSingleCoinInfoListItem>
      <CoinInfo
        id={id}
        name={name}
        image={imagePic}
        symbol={symbol}
        rank={market_cap_rank}
      />
      <StSingleCoinInfoDetail>
        <StSingleCoinInfoDetailPrice isPriceUp={isPriceUp}>
          <StSingleCoinInfoDetailPricePart>
            <h5>Price</h5>
            <span className="price-usd">
              $&nbsp;
              {current_price_data?.toLocaleString("en")}
              &nbsp; <h5>USD</h5>
            </span>
            <span className="price">
              {current_price_data?.toLocaleString("en")}
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
              $&nbsp;{market_cap_data_usd?.toLocaleString("en")}
              &nbsp;USD
            </span>
            <h5>
              {market_cap_data_btc?.toLocaleString("en")}
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
