import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
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
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Open Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                location.pathname === to ? "text-yellow-400" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Sidebar for Mobile (drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
            tabIndex={0}
            aria-label="Close Menu"
          ></div>
          {/* Sidebar */}
          <div className="relative bg-gray-900 text-white w-64 h-full p-4 shadow-lg z-50">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`hover:text-yellow-400 transition-colors ${
                    location.pathname === to ? "text-yellow-400" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for mobile top bar to avoid overlap */}
      <div className="md:hidden h-14" />
    </>
  );
}

export default Sidebar;
