import React, { useEffect, useState } from "react";

import CoinGecko from "coingecko-api";
import Loading from "../Loading";
import {
  StHomeCoinDetail,
  StHomeCoinDetailPrice,
  StHomeCoinDetailPricePart,
  StHomeCoinListContainer,
  StHomeCoinListItem,
  StHomeContainer,
} from "./style";
import CoinInfo from "./components/CoinInfo";
import InfoChart from "./components/Chart";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    const getData = async () => {
      setLoading(true);
      const res = await CoinGeckoClient.coins.all();
      const chartData = await CoinGeckoClient.coins.fetchMarketChart(
        "bitcoin",
        {
          days: 7,
          vs_currency: "usd",
        }
      );

      console.log(chartData);
      setCoins(res?.data);
      res?.data && setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <StHomeContainer>
        <StHomeCoinListContainer>
          {coins.slice(0, 5).map(({ name, id, image, symbol, market_data }) => (
            <StHomeCoinListItem key={id}>
              <CoinInfo name={name} image={image} symbol={symbol} />
              <StHomeCoinDetail>
                <StHomeCoinDetailPrice>
                  <StHomeCoinDetailPricePart>
                    <h5>pirce</h5>
                    <span>${market_data.current_price.usd}usd</span>
                    <h5>
                      {market_data.current_price.btc}btc
                      {market_data.price_change_percentage_24h.toFixed(2)}%
                    </h5>
                  </StHomeCoinDetailPricePart>

                  <StHomeCoinDetailPricePart>
                    <h5>Rank</h5>
                    <span> Rank&nbsp;{market_data.market_cap_rank}</span>
                  </StHomeCoinDetailPricePart>
                  <StHomeCoinDetailPricePart>
                    <h5>Health</h5>
                    <span>Attractive</span>
                  </StHomeCoinDetailPricePart>
                  <StHomeCoinDetailPricePart>
                    <h5>sentiment</h5>
                    <span>Attractive</span>
                  </StHomeCoinDetailPricePart>
                </StHomeCoinDetailPrice>
                <StHomeCoinDetailPrice>
                  <StHomeCoinDetailPricePart>
                    <h5>Market Cap</h5>
                    <span>${market_data.market_cap.usd}usd</span>
                    <h5>{market_data.market_cap.btc}btc</h5>
                  </StHomeCoinDetailPricePart>
                  <StHomeCoinDetailPricePart>
                    <h5>Volume</h5>
                    <span>${market_data.total_volume.usd}usd</span>
                    <h5>{market_data.total_volume.btc}btc</h5>
                  </StHomeCoinDetailPricePart>
                  <StHomeCoinDetailPricePart>
                    <InfoChart id={id} />
                  </StHomeCoinDetailPricePart>
                </StHomeCoinDetailPrice>
              </StHomeCoinDetail>
            </StHomeCoinListItem>
          ))}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;
