import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import CoinGecko from "coingecko-api";

import selectors from "../../redux/coins/selectors";
import {fetchCoins} from "../../redux/coins/actions";
import Loading from "../Loading";

import {StHomeCoinListContainer, StHomeContainer} from "./style";
import SingleCoinInfo from "../SingleCoinInfo";

const CoinGeckoClient = new CoinGecko();

const Home = () => {
  const state = useSelector(selectors.getCoins);
  const dispatch = useDispatch();
  const getData = useCallback(async () => {
    try {
      const res = await CoinGeckoClient.coins.all();
      dispatch(fetchCoins(res?.data));
    } catch (error) {
      return;
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
            return <SingleCoinInfo {...item} key={item?.id} />;
          })}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;
