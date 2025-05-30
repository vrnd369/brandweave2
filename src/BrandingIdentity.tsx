import React from "react";
import { Link } from "react-router-dom";

export default function BrandingIdentity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">Branding & Identity</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#006457] font-semibold">
            Branding & Identity
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Comprehensive brand development.
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e57701] to-[#006457] text-transparent bg-clip-text">
          Build a Memorable Brand
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Brand Strategy
            </h3>
            <p className="text-gray-700">
              Develop a clear, compelling strategy to guide your brand's growth.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Brand Guidelines
            </h3>
            <p className="text-gray-700">
              Consistent rules for logo, color, typography, and messaging.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Brand Identity Design
            </h3>
            <p className="text-gray-700">
              Logo, visual assets, and design system for a strong brand
              presence.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Copywriting
            </h3>
            <p className="text-gray-700">
              Persuasive, on-brand copy for your website and marketing
              materials.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Marketing Collaterals
            </h3>
            <p className="text-gray-700">
              Brochures, presentations, and more to support your brand
              campaigns.
            </p>
          </div>
        </div>
        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#e57701]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We use industry-leading design and branding tools to create a unique
            identity for your business.
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2048px-Adobe_InDesign_CC_icon.svg.png"
              alt="InDesign"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2048px-Adobe_After_Effects_CC_icon.svg.png"
              alt="After Effects"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2048px-Adobe_Premiere_Pro_CC_icon.svg.png"
              alt="Premiere Pro"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/canva-1.svg"
              alt="Canva"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
