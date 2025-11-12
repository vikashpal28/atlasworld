import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 ">
      <div className="flex text-white items-center justify-between px-4 py-4 max-w-[1200px] m-auto">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">WorldAtlas</h1>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink className="hover:underline hover:text-blue-700" to="/">
            Home
          </NavLink>
          <NavLink className="hover:underline hover:text-blue-700" to="/about">
            About
          </NavLink>
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/country"
          >
            Country
          </NavLink>
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4">
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/country"
            onClick={() => setIsOpen(false)}
          >
            Country
          </NavLink>
          <NavLink
            className="hover:underline hover:text-blue-700"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};
