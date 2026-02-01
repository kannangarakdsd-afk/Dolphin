import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header= () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg">
              DE
            </div>
            <div className="flex flex-col">
              {/* Changed text-white to text-slate-800 for visibility on light backgrounds */}
              <span className="text-slate-800 font-bold text-lg tracking-tight uppercase leading-none">
                Dolphin Engineers
              </span>
              <span className="text-slate-500 text-[10px] font-semibold tracking-widest">
                PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 pb-1 border-b-2 ${
                    isActive 
                    ? 'text-blue-600 border-blue-600' 
                    : 'text-slate-600 border-transparent hover:text-blue-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button - Visible only on Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 text-base font-medium rounded-md ${
                    isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;