import { css } from "styled-components";

export const FancyClickableItems = () => css`
  border-style: solid;
  border-width: 2px;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  overflow: hidden;
  transition: all 235ms ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  :focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
