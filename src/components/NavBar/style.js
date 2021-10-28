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
    font-size: 1.2rem;
    letter-spacing: 5px;
  }
`;
export const StNavBarLinks = styled.div`
  display: flex;
  font-size: 0.9rem;
  text-transform: capitalize;
  & span {
    color: #b58e28;
  }
`;
