import React, { useEffect, useState } from "react";

import CoinGecko from "coingecko-api";
import CoinInfo from "./components/CoinInfo";
import InfoChart from "../Chart";
import Loading from "../Loading";

import {
  StHomeCoinDetail,
  StHomeCoinDetailPrice,
  StHomeCoinDetailPricePart,
  StHomeCoinListContainer,
  StHomeCoinListItem,
  StHomeContainer,
} from "./style";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    const getData = async () => {
      setLoading(true);
      const res = await CoinGeckoClient.coins.all();
      setCoins(res?.data);
      res?.data && setLoading(false);
    };
    getData();
  }, []);
  console.log(coins);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <StHomeContainer>
        <StHomeCoinListContainer>
          {coins.slice(0, 5).map(({ name, id, image, symbol, market_data }) => {
            const {
              current_price,
              market_cap_change_percentage_24h_in_currency: usdChange24h,
              total_volume,
              market_cap,
              market_cap_rank,
            } = market_data;
            return (
              <StHomeCoinListItem key={id}>
                <CoinInfo name={name} image={image} symbol={symbol} id={id} />
                <StHomeCoinDetail>
                  <StHomeCoinDetailPrice isPriceUp={usdChange24h > 0}>
                    <StHomeCoinDetailPricePart>
                      <h5>Price</h5>
                      <span className="price-usd">
                        $&nbsp;
                        {current_price.usd.toLocaleString("en")}
                        &nbsp; <h5>USD</h5>
                      </span>
                      <span className="price">
                        {current_price.btc.toLocaleString("en")}
                        &nbsp;BTC &nbsp;&nbsp;
                        <p>{usdChange24h.usd.toFixed(2)}%</p>
                      </span>
                    </StHomeCoinDetailPricePart>

                    <StHomeCoinDetailPricePart>
                      <h5>Rank</h5>
                      <span className="rank">Rank&nbsp;{market_cap_rank}</span>
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
                      <span>
                        $&nbsp;{market_cap.usd.toLocaleString("en")}
                        &nbsp;USD
                      </span>
                      <h5>
                        {market_cap.btc.toLocaleString("en")}
                        &nbsp;BTC
                      </h5>
                    </StHomeCoinDetailPricePart>
                    <StHomeCoinDetailPricePart>
                      <h5>Volume</h5>
                      <span>
                        $&nbsp;
                        {total_volume.usd.toLocaleString("en")}
                        &nbsp;USD
                      </span>
                      <h5>
                        {total_volume.btc.toLocaleString("en")}
                        &nbsp;BTC
                      </h5>
                    </StHomeCoinDetailPricePart>
                    <StHomeCoinDetailPricePart>
                      <InfoChart id={id} />
                    </StHomeCoinDetailPricePart>
                  </StHomeCoinDetailPrice>
                </StHomeCoinDetail>
              </StHomeCoinListItem>
            );
          })}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;