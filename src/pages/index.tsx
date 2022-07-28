import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const staticData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(staticData, "staticData from graphql");
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/blog">Blog</Link>
      <p>
        I'm making this by following the Gatsby Tutorial. Title:{" "}
        {staticData.site.siteMetadata.title}
      </p>
    </main>
  );
};

export default IndexPage;
