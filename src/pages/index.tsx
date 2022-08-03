import React from "react";
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
} from "../components";

const IndexPage = ({ data }: any) => {
  return (
    <Layout>
      <section>filters</section>
      <Grid>
        {data.allMdx.nodes.map((node: any) => {
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
