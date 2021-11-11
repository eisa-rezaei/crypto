import React from "react";
import {StFooterContainer} from "./style";

const Footer = () => {
  return (
    <StFooterContainer>
      All Rights Reserved For Eisa Rezaei<span>&nbsp;&copy;</span>
      &nbsp;{new Date().getFullYear()}
    </StFooterContainer>
  );
};

export default Footer;
