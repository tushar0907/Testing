import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Explore",
  // icons: [{ url: "/logo.svg", href: "/logo.svg" }],
};

const  ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ExploreLayout;
