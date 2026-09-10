const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="w-25.5 h-auto"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <a
              href="#"
              className="text-xs font-medium text-pink-500"
            >
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

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-xs font-medium text-slate-600 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="px-5 py-2 rounded-full text-xs font-medium text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;