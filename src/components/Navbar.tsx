const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center">
  <img
    src="/images/logo-text.png"
    alt="Dev Stack"
    className="h-10 w-auto"
  />
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition">
              Home
            </a>
            <a href="#technologies" className="text-gray-700 hover:text-pink-500 transition">
              Technologies
            </a>
            <a href="#projects" className="text-gray-700 hover:text-pink-500 transition">
              Projects
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-gray-700 font-medium hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="px-5 py-2.5 rounded-full text-white font-medium bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;