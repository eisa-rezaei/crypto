import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import selectors from "../../redux/coins/selectors";
import { fetchCoins } from "../../redux/coins/actions";
import Loading from "../Loading";

import { StHomeCoinListContainer, StHomeContainer } from "./style";
import SingleCoinInfo from "../SingleCoinInfo";

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
    getData();
  }, [getData]);
  if (!state[0]) {
    return <Loading styled />;
  } else {
    return (
      <StHomeContainer>
        <StHomeCoinListContainer>
          {state.slice(0, 20).map((item) => {
            return <SingleCoinInfo {...item} />;
          })}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;
