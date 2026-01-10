import React from 'react'

import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-4 text-[#007BFF]">Dolphin Engineers PVT LTD</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for powder coating and iron works solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#007BFF] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#007BFF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  No: 158/4/1, Honnanthara North, Piliyandala
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#007BFF]" />
                <a href="mailto:dophineng9@gmail.com" className="text-gray-400 hover:text-[#007BFF]">
                  dophineng9@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007BFF]" />
                <a href="tel:0112601414" className="text-gray-400 hover:text-[#007BFF]">
                  0112601414
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007BFF]" />
                <a href="tel:0714428059" className="text-gray-400 hover:text-[#007BFF]">
                  0714428059 (Hotline)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dolphin Engineers PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

