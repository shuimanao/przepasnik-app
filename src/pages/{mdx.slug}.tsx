import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "../components";

const SingleRecipe = ({ data }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      <p>{data.mdx.frontmatter.title}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default SingleRecipe;
