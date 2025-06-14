import type React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Elements/Footer";
import "../../../App.css"

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;