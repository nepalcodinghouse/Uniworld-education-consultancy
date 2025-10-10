import React from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen py-20 px-4">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          Get in touch with <strong>Uniworld Education Consultancy</strong> —
          we’re here to answer your questions and help you start your journey abroad.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Address */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <MapPin className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Location</h3>
          <p className="text-gray-700">
            Putalisadak, Kathmandu, Nepal <br />
            (Opposite Kumari Bank)
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <Mail className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-700">info@uniworld.edu.np</p>
          <p className="text-gray-700">support@uniworld.edu.np</p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
          <Phone className="mx-auto w-10 h-10 text-[#155DFC] mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-700">+977 1 4412345</p>
          <p className="text-gray-700">+977 9841234567</p>
        </div>
      </section>

      {/* Contact Form */}
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

      {/* Google Map */}
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

export default Contact;
