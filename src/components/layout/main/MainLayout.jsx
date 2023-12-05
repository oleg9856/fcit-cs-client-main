import React from "react";
import MainHeader from "./header/MainHeader";
import MainFooter from "./footer/MainFooter";

const MainLayout = ({ children, withHeader = true, withFooter = true, isHomePage = false }) => (
  <>
    {withHeader && <MainHeader />}
    <main className="relative z-10 min-h-screen  overflow-hidden bg-primary" >{children}</main>
    {withFooter && <MainFooter />}
  </>
);
export default MainLayout;

//className={`relative z-10 min-h-screen overflow-hidden bg-[url('assets/background.png')] bg-cover ${isHomePage && "bg-[url('assets/homeBackground.png')]"}`}
