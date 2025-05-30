import React from "react";
import { Link } from "react-router-dom";

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#006457] to-[#004036] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">Social Media Marketing</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#e57701] font-semibold">
            Social Media Marketing
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Engaging social media strategies.
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
          Grow Your Audience & Brand
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Social Media Ads
            </h3>
            <p className="text-gray-700">
              Targeted ad campaigns across Instagram, Facebook, and Twitter to
              drive engagement, leads, and conversions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              YouTube & WhatsApp Marketing
            </h3>
            <p className="text-gray-700">
              Use short-form videos and direct messaging to connect with
              customers, promote offers, and build brand presence.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Brand Identity Design
            </h3>
            <p className="text-gray-700">
              Craft a unique and memorable brand presence across all channels.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Content Copywriting
            </h3>
            <p className="text-gray-700">
              Engaging copy for posts, ads, and campaigns that drive results.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Marketing Collaterals
            </h3>
            <p className="text-gray-700">
              Design and content for all your social campaigns and promotions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Social Media Audit
            </h3>
            <p className="text-gray-700">
              In-depth analysis of your social presence and actionable
              improvement plan.
            </p>
          </div>
        </div>
        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#006457]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We use the best social media management and analytics tools to
            maximize your brand's impact.
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
              src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
              alt="YouTube"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/buffer.svg"
              alt="Buffer"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
