import type React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Elements/Footer";
import "../../../App.css"
import Navbar from "../../Fragments/Navbar";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;