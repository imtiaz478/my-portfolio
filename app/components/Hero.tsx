import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#171717] text-white min-h-screen flex items-center justify-center px-6 py-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <div className="space-y-1">
            <span className="text-gray-400 text-lg font-medium tracking-wide">Hi I am</span>
            <h2 className="text-gray-200 text-2xl md:text-3xl font-semibold tracking-wide">
              IMTIAZ ALAM
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#EF8411] tracking-tight leading-tight pt-1">
              Full-Stack Developer
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-[#EF8411] hover:bg-[#d9730c] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-colors">
              Hire Me
            </button>
            <button className="border border-gray-500 hover:border-gray-300 text-gray-200 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download CV
            </button>
          </div>

          {/* Stats Box */}
          <div className="bg-[#212121] border border-gray-800 rounded-2xl p-6 mt-6 grid grid-cols-3 gap-4 max-w-lg shadow-xl">
            <div className="flex flex-col border-r border-gray-700/60 pr-2">
              <span className="text-[#EF8411] text-2xl font-bold">5+</span>
              <span className="text-gray-300 text-sm font-medium mt-1">Experiences</span>
            </div>
            <div className="flex flex-col border-r border-gray-700/60 pr-2 pl-2">
              <span className="text-[#EF8411] text-2xl font-bold">20+</span>
              <span className="text-gray-300 text-sm font-medium mt-1">Project done</span>
            </div>
            <div className="flex flex-col pl-2">
              <span className="text-[#EF8411] text-2xl font-bold">80+</span>
              <span className="text-gray-300 text-sm font-medium mt-1">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative flex justify-center items-center">
          {/* Background Dark Circle */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] bg-[#222222] rounded-full -z-0"></div>

          {/* Image Placeholder with Aspect-Square and Width/Height controls */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] aspect-square flex items-center justify-center overflow-hidden rounded-full">
            <img 
              src="./assets/imtiaz.jpeg" // আপনার কম্পিউটার বা public ফোল্ডার থেকে ইমেজের পাথটি এখানে বসিয়ে দিন
              alt="IMTIAZ ALAM"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
}