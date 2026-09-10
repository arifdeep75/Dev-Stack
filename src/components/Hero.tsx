const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 md:py-24">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] text-[#111827]">
              Build Your Ideal
              <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm md:text-base leading-6 text-slate-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3 mt-8">
              <button className="px-4 py-2 rounded-md text-xs md:text-sm font-medium text-white bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
                Explore Technologies
              </button>

              <button className="px-8 py-2 rounded-md text-xs md:text-sm font-medium text-slate-600 border border-slate-200 hover:border-pink-400 hover:text-pink-500 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/banner-stack.png"
              alt="Development Stack"
              className="w-70 md:w-82.5 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;