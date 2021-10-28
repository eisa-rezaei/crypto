import styled from "styled-components";

export const StChartBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & span {
    width: 72%;
  }
`;
export const StChartBoxContainerPrice = styled.div`
  min-height: 40px;
  margin-right: 10px;
  color: #babbbb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.7rem;
  & p {
    color: ${(props) => (props.isPos ? `green` : `red`)};
  }
`;
