import React from "react";
import MD from "../assets/owner.png";
import "./VoiceOfManagingDirector.css";

function VoiceOfManagingDirector() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16 sm:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Left Side - Text */}
        <div className="text-left space-y-6 sm:space-y-8 leading-relaxed">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-4 sm:mb-6 border-l-4 sm:border-l-8 border-red-600 pl-4 sm:pl-6">
            Voice of Managing Director / Founder
          </h2>

          {/* Greeting */}
          <p className="text-xl sm:text-2xl font-semibold text-black mb-4">
            NAMASTE / KONICHIWA,
          </p>

          {/* Message */}
          <div className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-900">
            <p>
              Uniworld Educational Consultancy is a leading language institution in Kathmandu, dedicated to excellence in education and career guidance. We have decades of experience in helping students achieve their dreams, and we ensure professional services for the most efficient outcomes.
            </p>

            <p>
              Mastery in foreign languages is a key to global opportunities. Choosing the right guidance is crucial — a small mistake in your career decision can lead to lost opportunities. Our advice: research your career path, your advisors, and your choices carefully.
            </p>

            <p>
              I strongly recommend{" "}
              <span className="font-semibold text-red-600">
                Uniworld Educational Consultancy
              </span>{" "}
              as your first choice for lifelong career planning. We provide authentic guidance and the right direction to shape your dreams.
            </p>

            <p>
              Our focus is mainly on Japanese language and VISA application services for higher studies in Japan. We also provide Nepali language training for foreign learners. With consistent dedication, Uniworld Educational Consultancy is expanding rapidly and making a mark nationwide. Join us for career development and higher studies opportunities.
            </p>

            <p>
              Thank you for your time, and we look forward to welcoming you to our consultancy.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-6 sm:pt-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">
              — Managing Director / Founder
            </h3>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-800">Mr. Yuvraj Shahi</p>
          </div>
        </div>

        {/* Right Side - MD Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={MD}
            alt="Managing Director"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-2xl border-2 sm:border-4 border-black hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default VoiceOfManagingDirector;
