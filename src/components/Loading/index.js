import React from "react";
import { GoGear } from "react-icons/go";
import { StLoadingContainer, StLoadingLogoContainer } from "./styles";

const Loading = ({ styled }) => {
  return (
    <StLoadingContainer styled={styled}>
      <StLoadingLogoContainer styled={styled}>
        <GoGear />
        <GoGear />
      </StLoadingLogoContainer>
    </StLoadingContainer>
  );
};

export default Loading;
