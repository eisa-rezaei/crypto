import React from "react";
import { GoGear } from "react-icons/go";
import { StLoadingContainer, StLoadingLogoConatainer } from "./styles";

const Loading = ({ styled }) => {
  return (
    <StLoadingContainer styled={styled}>
      <StLoadingLogoConatainer styled={styled}>
        <GoGear />
        <GoGear />
      </StLoadingLogoConatainer>
    </StLoadingContainer>
  );
};

export default Loading;
