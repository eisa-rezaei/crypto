import React from "react";
import {GoGear} from "react-icons/go";
import {StLoadingContainer, StLoadingLogoContainer} from "./styles";

const Loading = ({styled, bigChart}) => {
  return (
    <StLoadingContainer styled={styled} bigChart={!styled && bigChart}>
      <StLoadingLogoContainer>
        <span>
          <GoGear />
          <GoGear />
        </span>
      </StLoadingLogoContainer>
    </StLoadingContainer>
  );
};

export default Loading;
