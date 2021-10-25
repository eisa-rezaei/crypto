import React from "react";
import { Link, useLocation } from "react-router-dom";
import { StNavBarContainer } from "./style";

const NavBar = () => {
  const { pathname } = useLocation();
  const locationArr = pathname.split("/");
  locationArr.shift();
  locationArr[0] = "coins";
  return (
    <StNavBarContainer>
      {locationArr.map((item, index) => (
        <div key={index}>
          <Link to={item !== locationArr[0] ? `/${item}` : "/"}>{item}</Link>
          {index !== locationArr.length - 1 && <span>&nbsp; &gt; &nbsp;</span>}
        </div>
      ))}
    </StNavBarContainer>
  );
};

export default NavBar;
