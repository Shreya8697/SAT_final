import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Path ke basis pe title nikalna
  const getPageTitle = () => {
    if (location.pathname.includes("dashboard")) return "Dashboard";
    if (location.pathname.includes("courses")) return "Courses";
    if (location.pathname.includes("profile")) return "Profile";
    return "Home";
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (hide/unhide) */}
      {sidebarOpen && (
        <div className="w-1/5">
          <Sidebar />
        </div>
      )}

      {/* Right Content */}
      <div className={`flex flex-col ${sidebarOpen ? "w-4/5" : "w-full"}`}>
        {/* Topbar */}
        <div className="h-12 bg-gray-100 border-b flex items-center justify-between px-4 shadow">
          <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded hover:bg-gray-200"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 flex-1 overflow-auto">
          <Outlet /> {/* Route content yaha load hoga */}
        </div>
      </div>
    </div>
  );
}

export default Home;
