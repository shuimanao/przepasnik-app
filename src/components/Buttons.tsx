import styled from "styled-components";
import { FancyClickableItems } from "./mixins";

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;
  flex-direction: column;
  background-color: #007ac1;
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  ${FancyClickableItems}
`;
