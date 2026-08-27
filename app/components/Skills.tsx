import React from 'react';

interface Skill {
  name: string;
  percentage: number;
  shortLabel: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'Python', percentage: 90, shortLabel: 'Py' },
    { name: 'C++', percentage: 85, shortLabel: 'C++' },
    { name: 'JavaScript', percentage: 90, shortLabel: 'JS' },
    { name: 'C#', percentage: 75, shortLabel: 'C#' },
    { name: 'Java', percentage: 80, shortLabel: 'Jv' },
  ];

  return (
    <section className="bg-[#171717] text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Technical proficiency in programming languages
          </p>
        </div>

        {/* Circular Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const radius = 42;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

            return (
              <div key={index} className="flex flex-col items-center gap-3">
                {/* Circular Progress Bar Wrapper */}
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    {/* Background Circle Track */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-[#333333]"
                      strokeWidth="7"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    {/* Orange Active Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="text-[#EF8411] transition-all duration-1000 ease-out"
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>

                  {/* Icon / Short Text Badge inside Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-xl border border-gray-600 flex items-center justify-center bg-[#1f1f1f] text-gray-200 font-bold text-sm">
                      {skill.shortLabel}
                    </div>
                  </div>
                </div>

                {/* Percentage & Name */}
                <span className="text-[#EF8411] font-bold text-lg mt-1">
                  {skill.percentage}%
                </span>
                <span className="text-gray-300 text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}