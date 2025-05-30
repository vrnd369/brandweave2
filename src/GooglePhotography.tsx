import React from "react";
import { Link } from "react-router-dom";

export default function GooglePhotography() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">Google Photography</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#006457] font-semibold">
            Google Photography
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Professional photography services.
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e57701] to-[#006457] text-transparent bg-clip-text">
          Showcase Your Brand Visually
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Product Photoshoot
            </h3>
            <p className="text-gray-700">
              High-quality product photography to showcase your offerings
              professionally. Perfect for catalogs, e-commerce, and marketing
              materials.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Packaging Design Photography
            </h3>
            <p className="text-gray-700">
              Capture packaging aesthetics with precision to enhance visual
              appeal and build trust with customers.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Google Business Profile Photos
            </h3>
            <p className="text-gray-700">
              Optimize your Google Business listing with professional storefront
              and service photos that attract more local customers.
            </p>
          </div>
        </div>
        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#e57701]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We use the best cameras, editing software, and Google tools to
            deliver stunning visual content.
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Camera"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
              alt="360"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Google"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2048px-Adobe_Photoshop_CC_icon.svg.png"
              alt="Photoshop"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2048px-Adobe_Illustrator_CC_icon.svg.png"
              alt="Illustrator"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
