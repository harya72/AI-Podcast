import React from "react";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
