import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, type ImageDataLike } from "gatsby-plugin-image";
import { Layout } from "../components";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      hero_image_alt: string;
      hero_image: ImageDataLike;
    };
    body: string;
  };
};

const SingleRecipe = ({ data }: PageProps<DataProps>) => {
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
      }
      body
    }
  }
`;

// With image
// export const query = graphql`
//   query ($id: String) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         hero_image_alt
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//       body
//     }
//   }
// `;

export default SingleRecipe;

export { Head } from "../components/Layout";
