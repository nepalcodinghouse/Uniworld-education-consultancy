import React from "react";
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet icon issue (images not loading)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Contact() {
  const position = [27.7165529, 85.3239596]; // Putalisadak, Kathmandu

  return (
    <div>
      <Helmet>
        <title>Contact Us | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="Get in touch with Uniworld Educational Consultancy in Kathmandu, Nepal. Contact us for expert study abroad counseling, university admissions, visa services, and scholarship assistance." />
        <meta name="keywords" content="contact us, education consultancy, study abroad, nepal, university admission, scholarship, visa services, career counseling, kathmandu" />
        <meta property="og:title" content="Contact Us | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="Get in touch with Uniworld Educational Consultancy in Kathmandu, Nepal. Contact us for expert study abroad counseling, university admissions, visa services, and scholarship assistance." />
        <meta property="og:image" content="/og-image-contact.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="Get in touch with Uniworld Educational Consultancy in Kathmandu, Nepal. Contact us for expert study abroad counseling, university admissions, visa services, and scholarship assistance." />
        <meta name="twitter:image" content="/og-image-contact.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/contact" />
      </Helmet>
      <main className="bg-gray-50 min-h-screen py-16 sm:py-20 px-4">
      {/* Page Title */}
      <section className="text-center mb-10 sm:mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
          Get in touch with <strong>Uniworld Education Consultancy</strong> —
          we’re here to answer your questions and help you start your journey abroad.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Address */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition card">
          <MapPin className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-[#155DFC] mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Our Location</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Putalisadak, Kathmandu, Nepal <br />
            (Opposite Kumari Bank)
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition card">
          <Mail className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-[#155DFC] mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-700 text-sm sm:text-base">info@uniworld.edu.np</p>
          <p className="text-gray-700 text-sm sm:text-base">support@uniworld.edu.np</p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-xl transition card">
          <Phone className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-[#155DFC] mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-700 text-sm sm:text-base">+977 1 4412345</p>
          <p className="text-gray-700 text-sm sm:text-base">+977 9841234567</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-12 card">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          Send Us a Message
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none md:col-span-2 text-sm sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="btn-primary md:col-span-2 py-3 text-sm sm:text-base"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </section>

      {/* Leaflet Map */}
      <section className="max-w-6xl mx-auto mt-12 sm:mt-16 rounded-xl shadow-lg overflow-hidden">
        <div className="h-80 sm:h-96 rounded-xl overflow-hidden">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full z-0 rounded-xl"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                <strong>Uniworld Education Consultancy</strong>
                <br />
                Putalisadak, Kathmandu, Nepal
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </main>
    </div>
  );
}

export default Contact;
