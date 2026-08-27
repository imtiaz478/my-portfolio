import React from 'react';
import { 
 
  
   
  Mail, 
  Phone 
} from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact me', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1c1c1c] text-white py-12 px-4 flex flex-col items-center gap-8">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest">
        <span className="text-[#ff5500]">IMTIAZ </span>
        <span className="text-[#ff0033]">ALAM</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
      
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-300 font-medium pt-2">
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-gray-400" />
          <a href="mailto:Mahmood.fazile7005@gmail.com" className="hover:text-white transition-colors">
            binalamimtiaz@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-gray-400" />
          <a href="tel:+93729107005" className="hover:text-white transition-colors">
            +93 729 107 005
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;