import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/CommonPages/Navbar";
import Footer from "../Pages/CommonPages/Footer";

const MainLayout = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

  return (
    <div>
       {
        noHeaderFooter ||  <header className="w-11/12 mx-auto  ">
        <Navbar></Navbar>
    </header>
       }

        <Outlet></Outlet>

       {
        noHeaderFooter ||  <footer className="">
        <Footer></Footer>
        </footer>
       }
    </div>
  );
};

export default MainLayout;
