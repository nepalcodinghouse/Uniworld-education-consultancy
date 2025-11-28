import React from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>Page Not Found | Uniworld Education Consultancy Nepal</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to Uniworld Educational Consultancy's homepage for expert study abroad guidance in Nepal." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Page Not Found | Uniworld Education Consultancy Nepal" />
        <meta property="og:description" content="Oops! The page you're looking for doesn't exist. Return to Uniworld Educational Consultancy's homepage for expert study abroad guidance in Nepal." />
        <meta property="og:image" content="/og-image-404.jpg" />
        <meta property="og:url" content="https://www.uniworldnepal.com/404" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page Not Found | Uniworld Education Consultancy Nepal" />
        <meta name="twitter:description" content="Oops! The page you're looking for doesn't exist. Return to Uniworld Educational Consultancy's homepage for expert study abroad guidance in Nepal." />
        <meta name="twitter:image" content="/og-image-404.jpg" />
        <link rel="canonical" href="https://www.uniworldnepal.com/404" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-start justify-start px-10 py-20">
      <div className="text-left max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle size={40} className="text-[#155DFC]" />
          <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
        </div>

        <p className="text-gray-600 mb-6">
          The page you’re trying to access doesn’t exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-[#155DFC] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
    </div>
  );
}

export default PageNotFound;
