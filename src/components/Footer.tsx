const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-5 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="w-26.25 h-auto"
            />

            <p className="mt-4 max-w-xs text-[10px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="text-[10px] font-medium text-slate-500 hover:text-pink-500 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-slate-500 hover:text-pink-500 transition"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[10px] font-medium text-slate-500 hover:text-pink-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[10px] font-semibold text-slate-800 uppercase">
              Product
            </h4>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-semibold text-slate-800 uppercase">
              Company
            </h4>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#about"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-semibold text-slate-800 uppercase">
              Legal
            </h4>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[10px] text-slate-400 hover:text-pink-500 transition"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-[10px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[10px] text-slate-400 hover:text-pink-500 transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-slate-400 hover:text-pink-500 transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;