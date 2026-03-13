import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Research", path: "/Research" },
  { label: "Running", path: "/Running" },
  { label: "LACCTiC", path: "/SideProjects" },
  { label: "CV", path: "/CV" },
];

function NavLink({ to, label, isActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
        isActive ? "text-[#e1ece3]" : "text-[#b8d4ce] hover:text-[#e1ece3]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <motion.span
        className="absolute left-1 right-1 -bottom-0.5 h-[2px] bg-[#B26450] rounded-full origin-center"
        initial={false}
        animate={{ scaleX: hovered || isActive ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d3e42] border-b-4 border-[#B26450]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/Home" className="text-lg font-semibold tracking-tight text-[#b8d4ce] hover:text-[#e1ece3] transition-colors">
          Bijan Mazaheri
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              label={link.label}
              isActive={location.pathname === link.path}
            />
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-[#2d3e42]/50 transition-colors text-[#e1ece3]"
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
            className="md:hidden bg-[#2d3e42] border-b border-[#2d3e42] overflow-hidden"
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
                        ? "text-[#e1ece3] border-l-2 border-[#B26450]"
                        : "text-[#b8d4ce] hover:text-[#e1ece3]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}