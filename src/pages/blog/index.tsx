import React from "react";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }: any) => {
  return (
    <div>
      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
