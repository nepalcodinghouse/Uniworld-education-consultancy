import React from "react";
import { Helmet } from 'react-helmet-async';

function StudyAbroad() {
  return (
    <div>
      <Helmet>
        <title>Study Abroad Programs | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="Explore study abroad opportunities with Uniworld Educational Consultancy. Get expert guidance for admissions to top universities in Japan, Australia, Canada, USA, UK, and New Zealand." />
        <meta name="keywords" content="study abroad, international education, university admission, student visa, scholarship, career counseling, japan study, australia study, canada study, usa study, uk study, new zealand study" />
        <meta property="og:title" content="Study Abroad Programs | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="Explore study abroad opportunities with Uniworld Educational Consultancy. Get expert guidance for admissions to top universities in Japan, Australia, Canada, USA, UK, and New Zealand." />
        <meta property="og:image" content="/og-image-study-abroad.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/study-abroad" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study Abroad Programs | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="Explore study abroad opportunities with Uniworld Educational Consultancy. Get expert guidance for admissions to top universities in Japan, Australia, Canada, USA, UK, and New Zealand." />
        <meta name="twitter:image" content="/og-image-study-abroad.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/study-abroad" />
      </Helmet>
      <section className="w-full min-h-screen bg-gray-50 text-gray-900 px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 inline-block pb-2 sm:pb-3">
            Study Abroad with Uniworld
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            Your gateway to global education, scholarships, and career opportunities in top countries worldwide.
          </p>
        </div>

        {/* Services & Japanese Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg card">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#155DFC]">Our Services</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base sm:text-lg">
              <li className="pl-2">Career Counseling & Academic Planning</li>
              <li className="pl-2">Test Preparation: IELTS, PTE, TOEFL, Japanese Language</li>
              <li className="pl-2">University Admissions Guidance</li>
              <li className="pl-2">Visa Application & Documentation Support</li>
              <li className="pl-2">Pre-Departure Orientation & Cultural Guidance</li>
              <li className="pl-2">Scholarship & Funding Assistance</li>
            </ul>
          </div>

          <div className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg card">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#155DFC]">Japanese Language & Studies</h2>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Uniworld specializes in Japanese language education and higher studies in Japan. We prepare students for academic and cultural life abroad.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base sm:text-lg">
              <li className="pl-2">Beginner to Advanced Japanese Language Courses</li>
              <li className="pl-2">Student Visa Application Assistance</li>
              <li className="pl-2">Cultural Orientation & Pre-Departure Preparation</li>
              <li className="pl-2">University Placement Support</li>
            </ul>
          </div>
        </div>

        {/* Countries & Guarantee Section */}
        <div className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Top Countries We Guide Students To</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">Japan</h3>
              <p className="text-gray-700 text-sm sm:text-base">Language courses, scholarships, visa support, and university placements.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">Australia</h3>
              <p className="text-gray-700 text-sm sm:text-base">Top universities, IELTS prep, and visa guidance for higher studies.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">Canada</h3>
              <p className="text-gray-700 text-sm sm:text-base">Comprehensive counseling, visa applications, and student support services.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">USA</h3>
              <p className="text-gray-700 text-sm sm:text-base">Admission assistance, visa help, and pre-departure guidance.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">UK</h3>
              <p className="text-gray-700 text-sm sm:text-base">Scholarship info, language prep, and placement support.</p>
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 card">
              <h3 className="text-xl font-semibold mb-2 text-[#155DFC]">New Zealand</h3>
              <p className="text-gray-700 text-sm sm:text-base">Guidance for study visas, universities, and accommodation.</p>
            </div>
          </div>

          <div className="text-center mt-12 space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Guarantee</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              At Uniworld Educational Consultancy, we guarantee transparent guidance, verified information, and dedicated support throughout your study abroad journey. Your success is our mission.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to get professional counseling and start your path to studying abroad.
          </p>
          <a
            href="mailto:info@uniworldnepal.com"
            className="btn-primary inline-block px-8 py-4 text-base sm:text-lg rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}

export default StudyAbroad;
