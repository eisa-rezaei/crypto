import React, {useEffect} from "react";
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

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await CoinGeckoClient.coins.all();
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
          {state.slice(0, 20).map((item) => (
            <SingleCoinInfo {...item} key={item?.id} />
          ))}
        </StHomeCoinListContainer>
      </StHomeContainer>
    );
  }
};

export default Home;
