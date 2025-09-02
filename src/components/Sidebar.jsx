import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 text-white h-10 flex justify-between items-center px-3 shadow z-50">
        <h2 className="text-sm font-semibold">My App</h2>
        <button onClick={() => setOpen(true)}>
            <Menu size={18} />
        </button>
        </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen w-1/5 bg-gray-900 text-white flex-col p-4">
        <div className="flex shrink-0 items-center mb-1.5 bg-white p-2 rounded">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        {/* <h2 className="text-xl font-bold mb-6">Menu</h2> */}
        <nav className="flex flex-col gap-4 mt-3" >
          <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/courses" className="hover:text-yellow-400">Courses</Link>
          <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
        </nav>
      </div>

      {/* Mobile Drawer (Top Slide) */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          ></div>

          {/* Drawer from Top */}
          <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              <Link
                to="/dashboard"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/profile"
                className="hover:text-yellow-400"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
