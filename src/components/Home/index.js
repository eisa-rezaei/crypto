import React, {useEffect,useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import selectors from "../../redux/coins/selectors";
import {fetchCoins} from "../../redux/coins/actions";
import Loading from "../Loading";

import SingleCoinInfo from "../SingleCoinInfo";
import {CoinGeckoClient} from "../api/coinGecko";

import {StHomeCoinListContainer, StHomeContainer} from "./style";

const Home = () => {
  const state = useSelector(selectors.getCoins);
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    try {
      let res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      const data = await res.json();
      dispatch(fetchCoins(data));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await CoinGeckoClient.coins.all({
          per_page: 15,
          localization: false,
        });
        dispatch(fetchCoins(res?.data));
      } catch (error) {
        return;
      }
    };
    getData();
  }, [dispatch]);
  if (!state[0]) {
    return <Loading styled />;
  } else {
    return (
      <StHomeContainer>
        <StHomeCoinListContainer>
          {state.map((item) => (
            <SingleCoinInfo {...item} key={item.id} />
          ))}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;
