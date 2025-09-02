import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-1/5 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
        <Link to="/courses" className="hover:text-yellow-400">Courses</Link>
        <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
