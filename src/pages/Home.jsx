import React, { useState } from "react";
import Sparkle from "../assets/sprakles.png";
import Students from "../assets/students.png";
import VoiceOfManagingDirector from "../components/VoiceOfManagingDirector";
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
    <main className="bg-gray-50 min-h-screen relative px-4 py-20">
      {/* 🌟 Sparkle Background */}
      <img
        src={Sparkle}
        alt="Sparkle Background"
        draggable="false"
        className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 object-contain z-0 opacity-30"
      />

      {/* 🏠 Hero Section */}
      <section className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Best Education Consultancy in Nepal
        </h1>

        <p className="text-lg md:text-xl text-gray-700">
          As Nepal’s leading education consultancy, we help students get into
          top institutions from all corners of the globe.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-[#155DFC] text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-200">
            Inquiry Now
          </button>
          <button className="bg-white border border-[#155DFC] text-[#155DFC] px-6 py-3 rounded-full text-lg hover:bg-[#155DFC] hover:text-white transition duration-200">
            Get Scholarship
          </button>
        </div>

        <div className="mt-8 text-gray-700 text-base md:text-lg max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Gain Admission to Your Dream College Abroad
          </h2>
          <p>
            With over 21 years of experience, Uniworld Education Consultancy is
            one of the pioneers of education counselling in Nepal. Contact us
            today & book your session!
          </p>
        </div>
      </section>

      {/* 🏫 About Uniworld Education Consultancy */}
      <section className="relative z-10 mt-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white p-8 md:p-12">
        {/* 📸 LHS - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Students}
            alt="Students"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* 📝 RHS - Info */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#155DFC]">
            About Uniworld Education Consultancy
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            <strong>Uniworld Education Consultancy</strong> is Nepal’s premier
            study abroad guidance organization. With over{" "}
            <strong>21 years of proven excellence</strong>, Uniworld has helped
            thousands of students achieve their dream of studying in top
            universities across the globe.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Our mission is to provide{" "}
            <strong>personalized, reliable, and transparent counseling</strong>{" "}
            to every student. From course selection to pre-departure
            orientation, we make the entire process simple and stress-free.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
            Why Choose Uniworld?
          </h3>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2 text-gray-700">
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

          <p className="text-lg md:text-xl mt-4 text-gray-700">
            At <strong>Uniworld Education Consultancy</strong>, your goals
            become our mission. We’re here to ensure your academic journey
            abroad starts with confidence and clarity.
          </p>
        </div>
      </section>

      {/* 🧭 Our Services Section */}
      <section className="relative z-10 mt-24 max-w-6xl mx-auto bg-white p-8 md:p-12 text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#155DFC]">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
          Make your study abroad journey hassle-free with our range of services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
              className="flex flex-col items-center text-center p-6 border border-[#cccc] rounded-lg hover:shadow-md transition duration-200"
            >
              <service.icon className="text-[#155DFC]" size={48} />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📘 Accordion FAQ Section */}
      <section className="max-w-5xl mx-auto mt-24 bg-white p-8 md:p-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 text-[#1b1b1b]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left p-5 text-lg font-semibold text-gray-800 hover:bg-gray-50"
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
                  openIndex === index ? "max-h-40 p-5" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <VoiceOfManagingDirector />

      {/* 📍 Contact Section */}
      <section className="text-center mt-24 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          Get in touch with <strong>Uniworld Education Consultancy</strong> —
          we’re here to answer your questions and help you start your journey
          abroad.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <MapPin className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
          <p className="text-gray-700">
            Putalisadak, Kathmandu, Nepal <br />
            (Opposite Kumari Bank)
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <Mail className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-700">info@uniworld.edu.np</p>
          <p className="text-gray-700">support@uniworld.edu.np</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <Phone className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-700">+977 1 4412345</p>
          <p className="text-gray-700">+977 9841234567</p>
        </div>
      </section>

         
      {/* 📤 Contact Form */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Send Us a Message
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="bg-[#155DFC] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 md:col-span-2 transition"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </section>

      {/* 🌍 Google Map */}
      <section className="max-w-6xl mx-auto mt-16">
        <iframe
          title="Uniworld Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.028012210525!2d85.3239596150619!3d27.716552982788636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908f4e6f0ad%3A0x4b2dcd5df92c1c4b!2sPutalisadak%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1676794842000!5m2!1sen!2snp"
          className="w-full h-96 rounded-xl shadow-lg border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}

export default Home;
