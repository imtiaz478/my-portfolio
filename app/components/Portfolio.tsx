import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  image: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Web Development',
    'Desktop App',
    'Machine Learning',
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pharmacy Management System',
      subtitle: 'Desktop App / Enterprise System',
      category: 'Desktop App',
      // Pharmacy POS & Medical Inventory UI style
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Sellora (Retail Management)',
      subtitle: 'Web Application / POS System',
      category: 'Web Development',
      // Modern E-commerce / Retail Analytics Dashboard
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Face Attendance System',
      subtitle: 'AI & Computer Vision',
      category: 'Machine Learning',
      // AI Facial Recognition / Security Scanner UI
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-[#171717] text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Portfolio
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#EF8411] text-white shadow-md'
                  : 'bg-[#252525] text-gray-300 hover:bg-[#333333]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#212121] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#EF8411]/50 transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#1f1f1f]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#EF8411] text-white text-xs font-semibold px-4 py-2 rounded-full">
                    View Details
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs text-[#EF8411] font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#EF8411] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}