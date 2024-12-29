import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/CommonPages/Navbar";
import Footer from "../Pages/CommonPages/Footer";

const MainLayout = () => {
  return (
    <div>
        <header className="w-11/12 mx-auto  ">
            <Navbar></Navbar>
        </header>

        <Outlet></Outlet>

        <footer className="">
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default MainLayout;
