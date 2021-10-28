import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinGecko from "coingecko-api";

import CoinInfo from "../CoinInfo";

import Loading from "../Loading";

import {
  StHomeCoinDetail,
  StHomeCoinDetailPrice,
  StHomeCoinDetailPricePart,
  StHomeCoinListContainer,
  StHomeCoinListItem,
  StHomeContainer,
} from "./style";
import selectors from "../../redux/coins/selectors";
import { fetchCoins } from "../../redux/coins/actions";
import InternalChart from "../InternalChart";

const CoinGeckoClient = new CoinGecko();
const Home = () => {
  const state = useSelector(selectors.getCoins);
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    try {
      const res = await CoinGeckoClient.coins.all();
      dispatch(fetchCoins(res?.data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData]);
  if (!state[0]) {
    return <Loading styled />;
  } else {
    return (
      <StHomeContainer>
        <StHomeCoinListContainer>
          {state
            .slice(0, 20)
            .map(({ name, id, image, symbol, market_data }) => {
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
                        <span className="rank">
                          Rank&nbsp;{market_cap_rank}
                        </span>
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
                        <InternalChart id={id} />
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
