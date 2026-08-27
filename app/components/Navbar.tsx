import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About me', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact me', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <nav className="w-full bg-[#121212] px-8 py-4 flex items-center justify-between font-sans text-white">
      {/* Logo Section */}
      <div className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer select-none">
        <span className="text-[#F95700]">IMTIAZ </span>
        <span className="text-[#FF0033]">ALAM</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`text-base font-medium transition-colors duration-200 hover:text-[#F95700] ${
                isActive ? 'text-[#F95700]' : 'text-gray-300'
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      {/* Action Button */}
      <button className="bg-[#FF6A00] hover:bg-[#E55F00] text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-200 active:scale-95">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;