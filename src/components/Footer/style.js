import styled from "styled-components";

export const StFooterContainer = styled.footer`
  width: 100%;
  min-height: 30px;
  position: absolute;
  bottom: 0;
  color: #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  letter-spacing: 3px;
  @media (max-width: 700px) {
    font-size: 0.4rem;
    letter-spacing: 2px;
  }
`;
