import React from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#006457] to-[#004036] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">Digital Marketing</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#e57701] font-semibold">
            Digital Marketing
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Comprehensive digital marketing strategies.
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
          Grow Your Brand Online
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Social Media Ads
            </h3>
            <p className="text-gray-700">
              Reach your target audience through strategic ad placements on
              platforms like Facebook, Instagram, and LinkedIn.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Google & Shopping Ads
            </h3>
            <p className="text-gray-700">
              Drive conversions and traffic with optimized Google Ads, including
              display, search, and product listing campaigns.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              YouTube & Email Marketing
            </h3>
            <p className="text-gray-700">
              Engage users with video content and personalized email campaigns
              that boost brand visibility and conversions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              WhatsApp Marketing
            </h3>
            <p className="text-gray-700">
              Use WhatsApp for direct communication, updates, and promotions to
              build trust and boost customer engagement.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Amazon & Flipkart Marketing
            </h3>
            <p className="text-gray-700">
              Optimize your marketplace presence with listing management, ad
              campaigns, and performance monitoring.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              SEO Optimization
            </h3>
            <p className="text-gray-700">
              Improve your search rankings with keyword targeting, technical SEO
              fixes, backlink building, and content strategy.
            </p>
          </div>
        </div>
        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#006457]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We leverage the best digital marketing platforms and analytics tools
            to maximize your ROI.
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              src="https://ekommerce360.com/wp-content/uploads/2022/04/Instagram.svg"
              alt="Instagram"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://ekommerce360.com/wp-content/uploads/2022/04/Facebook.svg"
              alt="Facebook"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://ekommerce360.com/wp-content/uploads/2022/04/GAds.svg"
              alt="Google Ads"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://ekommerce360.com/wp-content/uploads/2022/05/YouTube.svg"
              alt="YouTube"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://ekommerce360.com/wp-content/uploads/2022/04/WhatsApp.svg"
              alt="WhatsApp"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="Flipkart"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg"
              alt="Google Analytics"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
