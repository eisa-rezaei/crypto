import React, { useEffect, useState } from "react";
import CoinGecko from "coingecko-api";
import { useParams } from "react-router";
import { StCoinContainer, StCoinDetail } from "./style";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    const getData = async () => {
      setLoading(true);
      const res = await CoinGeckoClient.coins.fetch(id, {});
      setCoin(res.data);
      res.data && setLoading(false);
    };
    getData();
  }, [id]);

  if (loading) {
    return <Loading styled />;
  } else {
    return (
      <StCoinContainer>
        <StCoinDetail>
          <Link to={`/coins/${coin.name}`}>{coin.name}</Link>
          <img src={coin.image?.small} alt={coin.name} />
        </StCoinDetail>
      </StCoinContainer>
    );
  }
};

export default Coin;
