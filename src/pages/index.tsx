import React, { useState, useCallback } from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import {
  Layout,
  Card,
  CardContent,
  CardTitleContainer,
  CardTitle,
  StyledLink,
  Grid,
  StyledImage,
  ButtonSection,
  Button,
} from "../components";

const IndexPage = ({ data }: any) => {
  const initState = data.allMdx.nodes;
  const [recipesList, setRecipesList] = useState(initState);

  const handleResetClick = useCallback(
    () => setRecipesList(initState),
    [setRecipesList]
  );

  const handleFilterClick = useCallback(
    (category?: string) => {
      const filteredRecipes = data.allMdx.nodes.filter(
        (node: any) => node.frontmatter.category === category
      );
      setRecipesList(filteredRecipes);
    },
    [setRecipesList]
  );

  return (
    <Layout>
      <ButtonSection>
        <Button onClick={handleResetClick}>Wszystkie</Button>
        <Button onClick={() => handleFilterClick("sweet")}>Słodkie</Button>
        <Button onClick={() => handleFilterClick("salty")}>Wytrawne</Button>
        <Button onClick={() => handleFilterClick()}>Nieoczywiste</Button>
      </ButtonSection>
      <Grid>
        {recipesList.map((node: any) => {
          const image = getImage(node.frontmatter.hero_image);
          return (
            <Card key={node.id}>
              <StyledLink to={`/${node.slug}`}>
                <CardContent>
                  {image && (
                    <StyledImage
                      image={image}
                      alt={node.frontmatter.hero_image_alt}
                      imgStyle={{
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <CardTitleContainer>
                    <CardTitle>{node.frontmatter.title}</CardTitle>
                  </CardTitleContainer>
                </CardContent>
              </StyledLink>
            </Card>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          category
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;

export { Head } from "../components/Layout";
