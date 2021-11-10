import React from "react";

import {BsArrowRight} from "react-icons/bs";
import {FaStar} from "react-icons/fa";

import {Link} from "react-router-dom";
import {COIN_INFO} from "../../data/data";
import {useSizeChecker} from "../Hook/useSizeChecker";

import {
  StHomeCoinInfo,
  StHomeCoinInfoLink,
  StHomeCoinInfoLinks,
  StHomeCoinInfoTitle,
  StHomeCoinInfoTitleNameBox,
} from "./style";

const CoinInfo = ({image, name, id, symbol, info, rank}) => {
  const size = useSizeChecker();
  return (
    <StHomeCoinInfo>
      <StHomeCoinInfoTitle>
        <StHomeCoinInfoTitleNameBox>
          <img src={image?.large} alt={name} />
          <span>
            {info ? <h5>{name}</h5> : <Link to={`/coins/${id}`}>{name}</Link>}
            <p>({symbol})</p>
          </span>
          <FaStar />
        </StHomeCoinInfoTitleNameBox>
        {!size ? <h4 className="rank">Rank {rank}</h4> : null}
      </StHomeCoinInfoTitle>
      <StHomeCoinInfoLinks>
        {COIN_INFO?.map(({logo, title}, index) => {
          return (
            <StHomeCoinInfoLink key={index}>
              {logo}
              <a href="https://i3o.ir" target="_blank" rel="noreferrer">
                {title}
                <BsArrowRight />
              </a>
            </StHomeCoinInfoLink>
          );
        })}
      </StHomeCoinInfoLinks>
    </StHomeCoinInfo>
  );
};

export default CoinInfo;
