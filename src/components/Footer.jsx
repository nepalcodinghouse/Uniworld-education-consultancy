import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#ffff] text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">
            Uniworld Education Consultancy
          </h2>
          <p className="text-gray-500 mb-6">
            Guiding students to achieve their global education dreams since 2003.
            Study abroad with expert counselling and proven guidance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-3">
            <li>University Admissions</li>
            <li>Scholarship Assistance</li>
            <li>Visa Services</li>
            <li>Career Counselling</li>
            <li>Test Preparation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              <span>Putalisadak, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              <span>info@uniworld.edu.np</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              <span>+977 9841234567</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ccc] mt-10 pt-6 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Uniworld Education Consultancy. All rights reserved.  
        <span className="block md:inline text-gray-500 mt-1 md:mt-0"> | Designed by <a href="https://www.abhayabikramshahi.xyz/" target="_blank" className="hover:underline delay-150"> Abhaya Bikram Shahi</a> 💻</span>
      </div>
    </footer>
  );
}

export default Footer;
