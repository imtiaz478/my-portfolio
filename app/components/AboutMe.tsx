import React from 'react';

export default function AboutMe() {
  return (
    <section className="bg-[#171717] text-white py-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            About Me
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            AIUB Student | Full-Stack Developer | Machine Learning & Data Analytics
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Area */}
          <div className="relative flex justify-center items-center">
            {/* Dark Circle Background */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-[#222222] rounded-full -z-0"></div>

            {/* Circular Image Wrapper */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="./assets/imtiaz.jpeg"
                alt="Imtiaz Alam"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Text Area */}
          <div className="flex flex-col items-start gap-6">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify">
              I am Imtiaz Alam, currently in my final year of Computer Science & Engineering at American International University-Bangladesh (AIUB). As a passionate Full-Stack Developer, Machine Learning enthusiast, and Data Analyst, I specialize in building intelligent applications, scalable web interfaces, and data-driven solutions. I enjoy taking on complex technical challenges and turning ideas into efficient, real-world software products.
            </p>

            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="mt-2 bg-[#EF8411] hover:bg-[#d9730c] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors duration-200 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}