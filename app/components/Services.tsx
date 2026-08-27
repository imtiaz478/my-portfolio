import React from 'react';
import { Brain, Code2, LineChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Machine Learning',
      description:
        'Building intelligent models, predictive algorithms, and custom AI solutions tailored for complex business problems.',
      icon: Brain,
    },
    {
      title: 'Full Stack Web Dev',
      description:
        'Developing scalable, high-performance web applications using modern frontend frameworks and robust backend architectures.',
      icon: Code2,
    },
    {
      title: 'Data Analyst',
      description:
        'Transforming raw data into actionable insights, visual dashboards, and data-driven strategies for better decision-making.',
      icon: LineChart,
    },
  ];

  return (
    <section className="bg-[#171717] text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Providing end-to-end technical solutions to help businesses automate, scale, and analyze effectively.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#1f1f1f] rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-700 border border-transparent transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="text-[#EF8411] mb-6 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon size={44} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-[#EF8411] text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}