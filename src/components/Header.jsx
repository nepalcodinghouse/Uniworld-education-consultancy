import React from 'react';
import { Phone, Send } from 'lucide-react';

function Header() {
  return (
    <header className="bg-[#1E3A8A] text-white px-4 md:px-10 py-3 md:py-4 font-poppins flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 shadow-md transition-all duration-300">
      {/* Left section (Phone numbers) */}
      <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-sm md:text-lg font-semibold tracking-wide">
          Kathmandu, 01-5354119 | 9851199446
        </span>
      </div>

      {/* Right section (Email) */}
      <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
        <Send className="w-5 h-5 md:w-6 md:h-6" />
        <span className="text-sm md:text-lg font-semibold tracking-wide">
          uniworldbagbazar14@gmail.com
        </span>
      </div>
    </header>
  );
}

export default Header;
