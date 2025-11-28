import React from 'react';
import { Phone, Send, Clock } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-4 sm:px-6 lg:px-8 py-3 font-sans flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6 shadow-lg transition-all duration-300">
      {/* Left section (Phone numbers) */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
          <Phone className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          <span className="text-xs sm:text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap">
            01-5354119 | 9851199446
          </span>
        </div>
        
        <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
          <Clock className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
          <span className="text-xs sm:text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap">
            Mon-Fri: 9AM-6PM
          </span>
        </div>
      </div>

      {/* Right section (Email) */}
      <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200">
        <Send className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        <span className="text-xs sm:text-xs lg:text-sm font-medium tracking-wide truncate max-w-[180px] sm:max-w-xs md:max-w-sm">
          uniworldbagbazar14@gmail.com
        </span>
      </div>
    </header>
  );
}

export default Header;
