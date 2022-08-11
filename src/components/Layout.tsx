import React, { FC, ReactNode } from "react";
import { Link, type HeadFC } from "gatsby";
import {
  Global,
  HeaderSection,
  PageTitle,
  MainSection,
  Footer,
} from "./Layout.styles";
import { SearchBar } from "./SearchBar";

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <title>Przepaśnik</title>
  </>
);

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Global />
      <HeaderSection>
        <PageTitle>
          <Link to="/">Przepaśnik</Link>
        </PageTitle>
        <SearchBar />
      </HeaderSection>
      <MainSection>{children}</MainSection>
      <Footer>footer</Footer>
    </>
  );
};
