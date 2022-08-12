import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/rubik";
import "@fontsource/kalam";

export const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    color: #41403e;
    font-family: Rubik, sans-serif;
    text-decoration: none;
  }
`;

export const HeaderSection = styled.section`
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-family: Kalam, cursive;
`;

export const MainSection = styled.main`
  padding: 30px;
`;

export const Footer = styled.footer`
  padding: 30px;
`;
