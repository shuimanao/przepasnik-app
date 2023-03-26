import styled from "styled-components";

export const Grid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 600px) {
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
