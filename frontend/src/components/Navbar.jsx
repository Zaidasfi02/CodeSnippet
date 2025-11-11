import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ lightweight icons

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-400">
          <Link to="/" onClick={() => setMenuOpen(false)}>Code Snippet Library</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>

          {email ? (
            <>
              <Link to="/add-snippet" className="hover:text-blue-400">Add Snippet</Link>
              <Link to="/my-snippets" className="hover:text-blue-400">My Snippets</Link>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
              <Link to="/signup" className="hover:text-blue-400">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2 border-t border-gray-700">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-200 hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-200 hover:text-blue-400"
          >
            About
          </Link>

          {email ? (
            <>
              <Link
                to="/add-snippet"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-200 hover:text-blue-400"
              >
                Add Snippet
              </Link>
              <Link
                to="/my-snippets"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-200 hover:text-blue-400"
              >
                My Snippets
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block text-red-400 w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-200 hover:text-blue-400"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-200 hover:text-blue-400"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}


