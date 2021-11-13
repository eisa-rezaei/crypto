import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import Loading from "../Loading";
import ChartsPage from "./components/ChartsPage";
import NewsPage from "./components/NewsPage";
import {CoinGeckoClient} from "../api/coinGecko";
import SingleCoinInfo from "../SingleCoinInfo";
import {
  StCoinContainer,
  StCoinInfoDetailNewsCharts,
  StCoinInfoDetailNav,
} from "./style";

const Coin = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [newsPage, setNewsPage] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await CoinGeckoClient.coins.fetch(id, {
        localization: false,
        tickers: false,
        developer_data: false,
        community_data: false,
        sparkline: false,
      });
      setCoin(res.data);
      setLoading(false);
    } catch (error) {
      return;
    }
  }, [id]);
  console.log(coin);

  useEffect(() => {
    getData();
  }, [getData, id]);

  if (loading) {
    return <Loading styled />;
  } else {
    const {market_data} = coin;
    return (
      <StCoinContainer>
        <SingleCoinInfo {...coin} />
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
              priceNum={market_data?.current_price?.usd}
              low={market_data?.high_24h?.usd.toLocaleString("en")}
              high={market_data?.low_24h?.usd.toLocaleString("en")}
              volume={market_data?.total_volume?.usd.toLocaleString("en")}
              maxSupply={market_data?.max_supply?.toLocaleString("en")}
              change={market_data?.price_change_24h}
              cir_supply={market_data?.circulating_supply}
              total_supply={market_data?.total_supply}
              percentage={market_data?.market_cap_change_percentage_24h_in_currency?.usd.toFixed(
                2
              )}
            />
          )}
        </StCoinInfoDetailNewsCharts>
      </StCoinContainer>
    );
  }
};
export default Coin;
