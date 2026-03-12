import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Research", path: "/Research" },
  { label: "Running", path: "/Running" },
  { label: "LACCTiC", path: "/SideProjects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d3e42] border-b border-[#2d3e42]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/Home" className="text-lg font-semibold tracking-tight text-[#88a7a1] hover:text-[#88a7a1] transition-colors">
          Bijan Mazaheri
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#e1ece3]"
                    : "text-[#7c9191] hover:text-[#e1ece3]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/CV"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              location.pathname === "/CV"
                ? "text-[#e1ece3]"
                : "text-[#7c9191] hover:text-[#e1ece3]"
            }`}
          >
            About
            </Link>
            <a
            href="mailto:bijan.h.mazaheri@dartmouth.edu"
            className="px-4 py-1.5 rounded-md text-sm font-medium bg-[#B26450] text-white hover:bg-[#9d5644] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-[#243336]/50 transition-colors text-[#E9E5CA]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2A3C42] border-b border-[#243336] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#e1ece3]"
                        : "text-[#7c9191] hover:text-[#e1ece3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/CV"
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === "/CV"
                    ? "text-[#e1ece3]"
                    : "text-[#7c9191] hover:text-[#e1ece3]"
                }`}
              >
                About
              </Link>
              <a
                href="mailto:bijan.h.mazaheri@dartmouth.edu"
                className="block px-3 py-2 rounded-md text-sm font-medium bg-[#B26450] text-white hover:bg-[#9d5644] transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}