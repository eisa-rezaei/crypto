import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StNavBarContainer, StNavBarLinks } from "./style";

const NavBar = () => {
  const { pathname } = useLocation();
  const locationArr = pathname.split("/");
  locationArr.shift();
  locationArr[0] = "coins";
  return (
    <StNavBarContainer>
      <h2>CRYPTO CURRENCY MARKET</h2>
      <StNavBarLinks>
        {locationArr.map((item, index) => (
          <div key={index}>
            <Link to={item !== locationArr[0] ? `/coins/${item}` : "/"}>
              {item}
            </Link>
            {index !== locationArr.length - 1 && (
              <span>&nbsp; &gt; &nbsp;</span>
            )}
          </div>
        ))}
      </StNavBarLinks>
    </StNavBarContainer>
  );
};

export default NavBar;
