import React from "react";
import { Link } from "gatsby";
import {
  Global,
  HeaderSection,
  PageTitle,
  MainSection,
  Footer,
} from "./Layout.styles";

export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <title>Przepaśnik</title>
  </>
);

export const Layout: React.FC<{}> = ({ children }: any) => {
  return (
    <>
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
