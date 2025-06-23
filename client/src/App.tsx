import type React from "react";
import { Outlet } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Fragments/Navbar";
import Footer from "./components/Elements/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-500">
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;