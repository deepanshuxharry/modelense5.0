import React, { useState, useEffect } from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion'; // Import Framer Motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name : "Events" , href: "/events"},
    { name: "Contact", href: "/contact" }
   
  ];

  const leftNavigation = navigation.slice(0, 2);
  const rightNavigation = navigation.slice(2);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ease-in-out
        ${scrolled ? 'bg-black backdrop-blur-md shadow-lg py-2' : 'bg-black py-2'}`} // Solid black background
      style={{ height: '105px', paddingTop: '15px' ,  }} // Fixed height for navbar
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 transform transition-transform duration-500 hover:scale-110"
          >
            <img 
              className="h-20 w-20 object-contain" 
              src="/logo.png" 
              alt="Logo" 
            />
          </Link>

          {/* Brand Name */}
          <div className="flex-grow flex justify-center">
            <span className="text-4xl font-bold text-purple-400">MODELENS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-6 py-3 text-lg font-medium transition-all duration-500 ease-in-out
                  group overflow-hidden rounded-full
                  ${location.pathname === item.href
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span 
                  className={`absolute inset-0 rounded-full transition-all duration-500 transform 
                    group-hover:scale-100 group-hover:opacity-100
                    ${location.pathname === item.href
                      ? 'bg-gray-900 scale-100 opacity-100'
                      : 'bg-gray-900/50 scale-x-0 opacity-0'
                    }`} 
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative w-12 h-12 rounded-full focus:outline-none hover:bg-gray-900/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className={`absolute w-8 h-0.5 bg-gray-300 transform transition-all duration-500 ease-in-out
                    ${isOpen ? 'rotate-45' : '-translate-y-2'}`}
                />
                <span 
                  className={`absolute w-8 h-0.5 bg-gray-300 transition-all duration-500 ease-in-out
                    ${isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}
                />
                <span 
                  className={`absolute w-8 h-0.5 bg-gray-300 transform transition-all duration-500 ease-in-out
                    ${isOpen ? '-rotate-45' : 'translate-y-2'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="px-6 py-4 space-y-2 bg-gray-900/95 backdrop-blur-md">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-6 py-4 text-xl font-medium rounded-xl transition-all duration-500
                transform hover:translate-x-4 hover:bg-gray-800/50
                ${location.pathname === item.href
                  ? 'text-purple-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-purple-400'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

