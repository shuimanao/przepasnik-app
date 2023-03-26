import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FancyClickableItems } from "./mixins";

export const Card = styled.article`
  flex-basis: 100%;
  ${FancyClickableItems}
  @media only screen and (min-width: 600px) {
    flex-basis: 49%;
  }
  @media only screen and (min-width: 900px) {
    flex-basis: 24%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const CardTitleContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledImage = styled(GatsbyImage)`
  height: 50%;
`;
