import styled from "styled-components";

export const StNavBarContainer = styled.nav`
  width: 100%;
  margin-bottom: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  & h2 {
    font-size: 1.1rem;
    letter-spacing: 5px;
  }
  @media (max-width: 750px) {
    margin: 10px 20px;
    line-height: 1.5;
    & h2 {
      font-size: 0.65rem;
      letter-spacing: 1px;
    }
  }
`;
export const StNavBarLinks = styled.div`
  display: flex;
  font-size: 0.9rem;
  text-transform: capitalize;
  & span {
    color: #b58e28;
  }
  @media (max-width: 750px) {
    font-size: 0.6rem;
  }
`;
