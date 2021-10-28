import React from "react";
import { StFooterContainer } from "./style";

const Footer = () => {
  return (
    <StFooterContainer>
      All Rights Reserved For Eisa Rezaei &copy; {new Date().getFullYear()}
    </StFooterContainer>
  );
};

export default Footer;
