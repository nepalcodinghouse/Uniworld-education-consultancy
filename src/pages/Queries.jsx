import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function SendQueries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required fields validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("⚠️ Please fill in all required fields!");
      return;
    }

    // Simulate sending data
    toast.loading("Sending your query...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("✅ Your query has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div>
      <Helmet>
        <title>Submit Your Queries | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="Submit your queries to Uniworld Educational Consultancy. Get expert guidance for studying abroad, university admissions, visa services, and scholarship assistance in Nepal." />
        <meta name="keywords" content="submit queries, education consultancy, study abroad, nepal, university admission, scholarship, visa services, career counseling" />
        <meta property="og:title" content="Submit Your Queries | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="Submit your queries to Uniworld Educational Consultancy. Get expert guidance for studying abroad, university admissions, visa services, and scholarship assistance in Nepal." />
        <meta property="og:image" content="/og-image-queries.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/submit-queries" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Submit Your Queries | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="Submit your queries to Uniworld Educational Consultancy. Get expert guidance for studying abroad, university admissions, visa services, and scholarship assistance in Nepal." />
        <meta name="twitter:image" content="/og-image-queries.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/submit-queries" />
      </Helmet>
      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Page Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Send Your Queries
        </h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Got a question or need more info? Drop your queries below and our
          support team will reach out as soon as possible.
        </p>
      </section>

      {/* Query Form */}
      <section className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What’s your query about?"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#155DFC] focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#155DFC] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Send size={20} />
            Send Query
          </button>
        </form>
      </section>
    </main>
    </div>
  );
}

export default SendQueries;
