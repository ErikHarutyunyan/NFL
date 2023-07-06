import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner/Banner";

function Layout(props) {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Outlet />
      </main> 
      
    </>
  );
}

export default Layout;
