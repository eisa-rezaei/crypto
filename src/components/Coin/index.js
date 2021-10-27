import React, { useCallback, useEffect, useState } from "react";
import CoinGecko from "coingecko-api";
import { useParams } from "react-router";
import Loading from "../Loading";
import ChartsPage from "./components/ChartsPage";
import NewsPage from "./components/NewsPage";
import AllCharts from "../AllCharts";
import {
  StCoinContainer,
  StPageCoinDetail,
  StCoinDetailPrice,
  StCoinDetailPricePart,
  StCoinDetail,
  StCoinInfoDetailNewsCharts,
  StCoinInfoDetailNav,
} from "./style";
import CoinInfo from "../CoinInfo";

const CoinGeckoClient = new CoinGecko();
const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [newsPage, setNewsPage] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await CoinGeckoClient.coins.fetch(id, {});
      setCoin(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData, id]);

  console.log(coin);
  console.log();

  if (loading) {
    return <Loading styled />;
  } else {
    const { market_data } = coin;
    return (
      <StCoinContainer>
        <StCoinDetail>
          <CoinInfo
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            id={coin.id}
            info
          />
          <StPageCoinDetail>
            <StCoinDetailPrice
              isPriceUp={
                market_data?.market_cap_change_percentage_24h_in_currency?.usd >
                0
              }
            >
              <StCoinDetailPricePart>
                <h5>Price</h5>
                <span className="price-usd">
                  $&nbsp;
                  {market_data?.current_price?.usd.toLocaleString("en")}
                  &nbsp; <h5>USD</h5>
                </span>
                <span className="price">
                  {market_data?.current_price?.btc.toLocaleString("en")}
                  &nbsp;BTC &nbsp;&nbsp;
                  <p>
                    {market_data?.market_cap_change_percentage_24h_in_currency?.usd.toFixed(
                      2
                    )}
                    %
                  </p>
                </span>
              </StCoinDetailPricePart>

              <StCoinDetailPricePart>
                <h5>Rank</h5>
                <span className="rank">
                  Rank&nbsp;{market_data?.market_cap_rank}
                </span>
              </StCoinDetailPricePart>
              <StCoinDetailPricePart>
                <h5>Health</h5>
                <span>Attractive</span>
              </StCoinDetailPricePart>
              <StCoinDetailPricePart>
                <h5>sentiment</h5>
                <span>Attractive</span>
              </StCoinDetailPricePart>
            </StCoinDetailPrice>
            <StCoinDetailPrice>
              <StCoinDetailPricePart>
                <h5>Market Cap</h5>
                <span>
                  $&nbsp;{market_data?.market_cap?.usd.toLocaleString("en")}
                  &nbsp;USD
                </span>
                <h5>
                  {market_data?.market_cap?.btc.toLocaleString("en")}
                  &nbsp;BTC
                </h5>
              </StCoinDetailPricePart>
              <StCoinDetailPricePart>
                <h5>Volume</h5>
                <span>
                  $&nbsp;
                  {market_data?.total_volume?.usd.toLocaleString("en")}
                  &nbsp;USD
                </span>
                <h5>
                  {market_data?.total_volume?.btc.toLocaleString("en")}
                  &nbsp;BTC
                </h5>
              </StCoinDetailPricePart>
              <StCoinDetailPricePart>
                <AllCharts
                  id={id}
                  isPriceUp={
                    market_data?.market_cap_change_percentage_24h_in_currency
                      ?.usd > 0
                  }
                />
              </StCoinDetailPricePart>
            </StCoinDetailPrice>
          </StPageCoinDetail>
        </StCoinDetail>
        <StCoinInfoDetailNewsCharts>
          <StCoinInfoDetailNav newsPage={newsPage}>
            <button type="button" onClick={() => setNewsPage(false)}>
              Charts
            </button>
            <button type="button" onClick={() => setNewsPage(true)}>
              News
            </button>
          </StCoinInfoDetailNav>
          {newsPage ? (
            <NewsPage />
          ) : (
            <ChartsPage
              name={coin?.name}
              id={coin?.id}
              description={coin?.description?.en}
              price={market_data?.current_price?.usd.toLocaleString("en")}
              low={market_data?.high_24h?.usd.toLocaleString("en")}
              high={market_data?.low_24h?.usd.toLocaleString("en")}
              volume={market_data?.total_volume?.usd.toLocaleString("en")}
              maxSupply={market_data?.max_supply?.toLocaleString("en")}
              change={market_data?.price_change_24h}
              cir_supply={market_data?.circulating_supply}
              total_supply={market_data?.total_supply}
            />
          )}
        </StCoinInfoDetailNewsCharts>
      </StCoinContainer>
    );
  }
};
export default Coin;
