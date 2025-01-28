import React, { PropsWithChildren } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({children}: PageLayoutProps) {
    return(
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
} 