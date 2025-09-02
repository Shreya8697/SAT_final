import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/courses", label: "Courses" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow fixed top-0 left-0 right-0 z-40">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <button
          onClick={() => setIsOpen(true)}
          className="focus:outline-none"
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col h-screen bg-gray-900 text-white w-64 p-4 fixed top-0 left-0 z-30">
        <div className="flex items-center mb-6 bg-white p-2 rounded">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-yellow-400 transition-colors ${
                location.pathname === to ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-4 shadow-lg z-50">
            <div className="flex items-center justify-between mb-6">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`hover:text-yellow-400 transition-colors ${
                    location.pathname === to
                      ? "text-yellow-400 font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)} // Close drawer on nav click
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Spacer for Mobile Top Bar */}
      <div className="md:hidden h-14" />
    </>
  );
}

export default Sidebar;
