import type React from "react";
import { Outlet } from "react-router-dom";
import "./App.css"
import Footer from "./features/dashboard/components/Elements/Footer";
import Navbar from "./components/Layouts/Navbar";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-500">
        <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;