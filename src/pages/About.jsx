import React from "react";
import MD from "../assets/owner.png"; // Managing Director
import CEO from "../assets/ceo.png"; // CEO image

function AboutUs() {
  return (
    <section className="w-full bg-gray-50 text-gray-900 px-8 py-24">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold border-b-4 border-gray-900 inline-block pb-3">
            About Uniworld Educational Consultancy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering Nepali students to achieve their dreams of studying abroad with expert guidance and professional services.
          </p>
        </div>

        {/* CEO & MD Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* CEO */}
          <div className="text-center">
            <img
              src={CEO}
              alt="CEO"
              className="w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-gray-900 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">Mr. Rajesh Koirala</h3>
            <p className="text-gray-700 font-medium">Principal and founder</p>
          </div>

          {/* MD */}
          <div className="text-center">
            <img
              src={MD}
              alt="Managing Director"
              className="w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-gray-900 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">Mr. Yuvraj Shahi</h3>
            <p className="text-gray-700 font-medium">Managing Director / Founder</p>
          </div>
        </div>

        {/* Message from MD */}
        <div className="bg-white p-12 rounded-xl shadow-lg space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Message from Our Managing Director
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            NAMASTE / KONICHIWA,
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            At Uniworld Educational Consultancy, we believe every student deserves clear guidance, quality education, and a bright future abroad. Our mission is to ensure that each student is fully prepared, informed, and confident about their study abroad journey. From Japanese language courses to scholarship assistance, we are committed to providing professional support every step of the way.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Choosing the right educational path is crucial for your career. At Uniworld, we ensure transparency, dedication, and excellence so that you achieve your international study dreams with confidence.
          </p>
          <p className="text-gray-900 font-semibold text-right">— Mr. Yuvraj Shahi</p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-800 text-lg mb-4">
              Uniworld Educational Consultancy is Nepal’s leading institution for guiding students towards global education opportunities. With years of experience, we provide career counseling, test preparation, university placements, visa guidance, and pre-departure support.
            </p>
            <p className="text-gray-800 text-lg">
              We specialize in Japanese language education, scholarships, and international student placements. Our transparent, reliable, and student-focused approach makes us a trusted partner in every student’s journey.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={MD}
              alt="Managing Director"
              className="w-80 h-96 object-cover rounded-xl shadow-2xl border-4 border-gray-900 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-800 text-lg">
              To empower Nepali students with the knowledge, guidance, and resources to succeed in international education, ensuring quality learning and professional growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-800 text-lg">
              To become Nepal’s most trusted educational consultancy, connecting students with top universities worldwide while providing personalized, expert guidance.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-700">Providing honest, transparent, and reliable guidance to students.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-700">Delivering the highest quality in education, counseling, and student services.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Dedication</h3>
              <p className="text-gray-700">Committed to supporting every student in achieving their academic and career goals.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Us Today</h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Let Uniworld guide you towards your study abroad dreams with expert support and reliable services.
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

export default AboutUs;
