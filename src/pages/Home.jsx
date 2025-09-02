import React from "react";
import Sidebar from "../components/Sidebar";
import StickyNavbar from "../components/StickyNavbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Main Content */}
      <div className="w-4/5 flex flex-col">
        <StickyNavbar />
        <div className="p-6 flex-1 overflow-auto">
          <Outlet />  {/* Yaha selected page ka content load hoga */}
        </div>
      </div>
    </div>
  );
}

export default Home;
