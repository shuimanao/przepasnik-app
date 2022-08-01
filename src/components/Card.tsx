import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const Card = styled.article`
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  overflow: hidden;
  flex-basis: 25%;
  flex-grow: 0;
  max-width: 25%;
  transition: 0.3s;
  :hover {
    opacity: 0.7;
    cursor: pointer;
    text-decoration: underline;
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
