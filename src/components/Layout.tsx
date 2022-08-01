import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import {
  Global,
  HeaderSection,
  PageTitle,
  MainSection,
  Footer,
} from "./Layout.styles";

export const Layout: React.FC<{}> = ({ children }: any) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl-PL",
        }}
      >
        <meta charSet="UTF-8" />
        <title>Przepaśnik</title>
      </Helmet>
      <Global />
      <HeaderSection>
        <PageTitle>
          <Link to="/">Przepaśnik</Link>
        </PageTitle>
        search bar
      </HeaderSection>
      <MainSection>{children}</MainSection>
      <Footer>footer</Footer>
    </>
  );
};
