import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import Sparkle from "../assets/sprakles.png";
import Students from "../assets/students.png";
import VoiceOfManagingDirector from "../components/VoiceOfManagingDirector";
import Contact from "./Contact";
import {
  GraduationCap,
  Award,
  FileText,
  Briefcase,
  Globe2,
  BookOpenCheck,
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { FiChevronDown } from "react-icons/fi";

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does Uniworld provide?",
      answer:
        "We offer personalized counselling, university admissions, scholarship assistance, visa guidance, and test preparation for students aspiring to study abroad.",
    },
    {
      question: "Which countries can I apply for through Uniworld?",
      answer:
        "We provide admission support for universities in the UK, USA, Australia, Canada, Japan, and other top destinations worldwide.",
    },
    {
      question: "Do you help with visa documentation?",
      answer:
        "Yes, our team provides full visa documentation support, mock interviews, and ensures your file meets embassy requirements.",
    },
    {
      question: "Is there a fee for counselling sessions?",
      answer:
        "Our first counselling session is absolutely free! Subsequent services are charged transparently based on your requirements.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Uniworld Education Consultancy | Best Study Abroad Services in Nepal</title>
        <meta name="description" content="Uniworld Education Consultancy is Nepal's leading education consultancy offering expert guidance for studying abroad. Get admission to top universities worldwide with our professional counseling services." />
        <meta name="keywords" content="education consultancy, study abroad, nepal, university admission, scholarship, visa services, career counseling, japanese language, ielts preparation" />
        <meta property="og:title" content="Uniworld Education Consultancy | Best Study Abroad Services in Nepal" />
        <meta property="og:description" content="Uniworld Education Consultancy is Nepal's leading education consultancy offering expert guidance for studying abroad. Get admission to top universities worldwide with our professional counseling services." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uniworld Education Consultancy | Best Study Abroad Services in Nepal" />
        <meta name="twitter:description" content="Uniworld Education Consultancy is Nepal's leading education consultancy offering expert guidance for studying abroad. Get admission to top universities worldwide with our professional counseling services." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/" />
      </Helmet>
      <main className="bg-gray-50 min-h-screen relative px-4 py-20">
        {/* 🌟 Sparkle Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src={Sparkle}
            alt="Sparkle Background"
            draggable="false"
            className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 object-contain opacity-20 animate-pulse-slow"
          />
        </div>

      {/* 🏠 Hero Section */}
      <section className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8 py-12 sm:py-16 md:py-20 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Best Education <span className="text-[#155DFC]">Consultancy</span> in Nepal
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
          As Nepal's leading education consultancy, we help students get into
          <span className="font-semibold text-[#155DFC]"> top institutions</span> from all corners of the globe.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 justify-center px-4">
          <button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Inquiry Now
          </button>
          <button className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            Get Scholarship
          </button>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-2xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Gain Admission to Your Dream College Abroad
          </h2>
          <p className="text-gray-700 text-lg">
            With over 21 years of experience, Uniworld Education Consultancy is
            one of the pioneers of education counselling in Nepal. Contact us
            today & book your session!
          </p>
        </div>
      </section>

      {/* 🏫 About Uniworld Education Consultancy */}
      <section className="relative z-10 mt-20 sm:mt-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-lg">
        {/* 📸 LHS - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Students}
            alt="Students"
            className="w-full max-w-md sm:max-w-lg rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* 📝 RHS - Info */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#155DFC]">
            About Uniworld Education Consultancy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            <strong>Uniworld Education Consultancy</strong> is Nepal’s premier
            study abroad guidance organization. With over{" "}
            <strong>21 years of proven excellence</strong>, Uniworld has helped
            thousands of students achieve their dream of studying in top
            universities across the globe.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Our mission is to provide{" "}
            <strong>personalized, reliable, and transparent counseling</strong>{" "}
            to every student. From course selection to pre-departure
            orientation, we make the entire process simple and stress-free.
          </p>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 text-gray-800">
            Why Choose Uniworld?
          </h3>
          <ul className="list-disc list-inside text-base sm:text-lg lg:text-xl space-y-2 text-gray-700">
            <li>
              <strong>Expert Counselors:</strong> Over two decades of experience
              guiding students worldwide.
            </li>
            <li>
              <strong>Global Reach:</strong> Trusted partner institutions in the
              UK, USA, Australia, Canada, and Japan.
            </li>
            <li>
              <strong>End-to-End Support:</strong> From documentation to visa
              and beyond.
            </li>
            <li>
              <strong>Success Stories:</strong> Thousands of students placed in
              top-ranked universities.
            </li>
          </ul>

          <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-700 leading-relaxed">
            At <strong>Uniworld Education Consultancy</strong>, your goals
            become our mission. We’re here to ensure your academic journey
            abroad starts with confidence and clarity.
          </p>
        </div>
      </section>

      {/* 🧭 Our Services Section */}
      <section className="relative z-10 mt-20 sm:mt-24 max-w-6xl mx-auto bg-white p-6 sm:p-8 lg:p-12 text-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 text-[#155DFC]">
          Our Services
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 mb-8 sm:mb-12">
          Make your study abroad journey hassle-free with our range of services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              icon: GraduationCap,
              title: "College & University Admission",
              desc: "Simplify your admission process with expert guidance.",
            },
            {
              icon: Award,
              title: "Scholarship Assistance",
              desc: "Get financial support through scholarships and grants.",
            },
            {
              icon: FileText,
              title: "Financial Documentation",
              desc: "Guidance for preparing and organizing financial documents.",
            },
            {
              icon: Briefcase,
              title: "Career Counselling",
              desc: "Personalized counselling to align academics and goals.",
            },
            {
              icon: Globe2,
              title: "Visa Services",
              desc: "Hassle-free visa guidance for smooth journey abroad.",
            },
            {
              icon: BookOpenCheck,
              title: "Test Preparation Classes",
              desc: "Prepare for IELTS, PTE, TOEFL, GRE, and SAT.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5 sm:p-6 border border-[#cccc] rounded-lg hover:shadow-md transition duration-200 card"
            >
              <service.icon className="text-[#155DFC]" size={40} />
              <h3 className="text-lg sm:text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📘 Accordion FAQ Section */}
      <section className="max-w-5xl mx-auto mt-20 sm:mt-24 bg-white p-6 sm:p-8 lg:p-12 rounded-xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left mb-6 sm:mb-8 text-[#1b1b1b]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left p-4 sm:p-5 text-base sm:text-lg font-semibold text-gray-800 hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <FiChevronDown
                  className={`transition-transform duration-300 cursor-pointer ${
                    openIndex === index ? "rotate-180 text-[#155DFC]" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 sm:max-h-60 p-4 sm:p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VoiceOfManagingDirector />

      {/* 📍 Contact Section */}
      <section className="text-center mt-20 sm:mt-24 mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          Get in touch with <strong>Uniworld Education Consultancy</strong> —
          we’re here to answer your questions and help you start your journey
          abroad.
        </p>
      </section>

      <Contact />
    </main>
    </div>
  );
}

export default Home;
