import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-16">

          <a href="#" className="shrink-0">
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="w-25.5 h-auto"
            />
          </a>

          <div className="flex items-center gap-7">
            <a href="#" className="text-xs font-medium text-pink-500">
              Home
            </a>

            <a
              href="#technologies"
              className="text-xs font-medium text-slate-600 hover:text-pink-500 transition"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-xs font-medium text-slate-600 hover:text-pink-500 transition"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-xs font-medium text-slate-600 hover:text-pink-500 transition"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-xs font-medium text-slate-600 hover:text-pink-500 transition"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-slate-600 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full text-xs font-medium text-white gradient-primary hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between h-16">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-700 text-xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Center Logo */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="w-22.5 h-auto"
            />
          </a>

          {/* Auth */}
          <div className="flex items-center gap-2 ml-auto">
            <button className="text-[10px] font-medium text-slate-600">
              Sign In
            </button>

            <button className="px-3 py-1.5 rounded-full text-[10px] font-medium text-white gradient-primary">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-3">
            <div className="flex flex-col gap-3">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-slate-600"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-slate-600"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-slate-600"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium text-slate-600"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;