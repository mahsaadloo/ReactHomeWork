import Footer from "./footer";
import Navbar from "./navbar";
import * as React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" h-screen">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
