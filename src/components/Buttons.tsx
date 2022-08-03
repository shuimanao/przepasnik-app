import styled from "styled-components";
import { FancyClickableItems } from "./mixins";

export const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;
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
