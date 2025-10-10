import React from "react";

function StudyAbroad() {
  return (
    <section className="w-full min-h-screen bg-gray-50 text-gray-900 px-8 py-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 border-b-4 border-gray-800 inline-block pb-3">
            Study Abroad with Uniworld
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Your gateway to global education, scholarships, and career opportunities in top countries worldwide.
          </p>
        </div>

        {/* Services & Japanese Section */}
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
              <li>Career Counseling & Academic Planning</li>
              <li>Test Preparation: IELTS, PTE, TOEFL, Japanese Language</li>
              <li>University Admissions Guidance</li>
              <li>Visa Application & Documentation Support</li>
              <li>Pre-Departure Orientation & Cultural Guidance</li>
              <li>Scholarship & Funding Assistance</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Japanese Language & Studies</h2>
            <p className="text-gray-800 text-lg">
              Uniworld specializes in Japanese language education and higher studies in Japan. We prepare students for academic and cultural life abroad.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
              <li>Beginner to Advanced Japanese Language Courses</li>
              <li>Student Visa Application Assistance</li>
              <li>Cultural Orientation & Pre-Departure Preparation</li>
              <li>University Placement Support</li>
            </ul>
          </div>
        </div>

        {/* Countries & Guarantee Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Top Countries We Guide Students To</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Japan</h3>
              <p className="text-gray-700">Language courses, scholarships, visa support, and university placements.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Australia</h3>
              <p className="text-gray-700">Top universities, IELTS prep, and visa guidance for higher studies.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Canada</h3>
              <p className="text-gray-700">Comprehensive counseling, visa applications, and student support services.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">USA</h3>
              <p className="text-gray-700">Admission assistance, visa help, and pre-departure guidance.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">UK</h3>
              <p className="text-gray-700">Scholarship info, language prep, and placement support.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">New Zealand</h3>
              <p className="text-gray-700">Guidance for study visas, universities, and accommodation.</p>
            </div>
          </div>

          <div className="text-center mt-12 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Our Guarantee</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              At Uniworld Educational Consultancy, we guarantee transparent guidance, verified information, and dedicated support throughout your study abroad journey. Your success is our mission.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Contact us today to get professional counseling and start your path to studying abroad.
          </p>
          <a
            href="mailto:info@uniworldnepal.com"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default StudyAbroad;
