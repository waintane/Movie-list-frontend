import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Header></Header>
      <div className="main">{children}</div>
      <Footer></Footer>
    </div>
  );
}
