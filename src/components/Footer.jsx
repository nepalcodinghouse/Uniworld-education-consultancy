import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Brand Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">
            Uniworld Education Consultancy
          </h2>
          <p className="text-gray-200 mb-6 text-sm leading-relaxed">
            Guiding students to achieve their global education dreams since 2003.
            Study abroad with expert counselling and proven guidance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200 transition duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-200 transition duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-300 transition duration-200">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-gray-200 hover:text-white transition duration-200">Home</a></li>
            <li><a href="/about" className="text-gray-200 hover:text-white transition duration-200">About Us</a></li>
            <li><a href="/study-abroad" className="text-gray-200 hover:text-white transition duration-200">Study Abroad</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-white transition duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li className="text-gray-200 hover:text-white transition duration-200 cursor-pointer">University Admissions</li>
            <li className="text-gray-200 hover:text-white transition duration-200 cursor-pointer">Scholarship Assistance</li>
            <li className="text-gray-200 hover:text-white transition duration-200 cursor-pointer">Visa Services</li>
            <li className="text-gray-200 hover:text-white transition duration-200 cursor-pointer">Career Counselling</li>
            <li className="text-gray-200 hover:text-white transition duration-200 cursor-pointer">Test Preparation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-300 mt-1 flex-shrink-0" />
              <span className="text-gray-200">Putalisadak, Kathmandu, Nepal (Opposite Kumari Bank)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-300 flex-shrink-0" />
              <span className="text-gray-200">info@uniworld.edu.np</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-300 flex-shrink-0" />
              <span className="text-gray-200">+977 1 4412345<br/>+977 9841234567</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-400/30 mt-12 pt-6 text-center text-gray-200 text-sm px-4">
        © {new Date().getFullYear()} Uniworld Education Consultancy. All rights reserved.  
        <span className="block sm:inline text-gray-300 mt-1 sm:mt-0"> | Designed by <a href="https://www.abhayabikramshahi.xyz/" target="_blank" className="hover:text-white hover:underline transition duration-200"> Abhaya Bikram Shahi</a> 💻</span>
      </div>
    </footer>
  );
}

export default Footer;
