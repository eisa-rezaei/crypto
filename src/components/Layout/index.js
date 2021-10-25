import React from "react";
import { GlobalStyle, StLayoutContainer } from "./style";

const Layout = ({ children }) => {
  return (
    <StLayoutContainer>
      {children}
      <GlobalStyle />
    </StLayoutContainer>
  );
};

export default Layout;
