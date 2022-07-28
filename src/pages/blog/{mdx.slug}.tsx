import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }: any) => {
  return (
    <div>
      <p>{data.mdx.frontmatter.title}</p>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
