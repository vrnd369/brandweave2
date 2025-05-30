import React from "react";
import { Link } from "react-router-dom";

export default function AppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">App Development</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#006457] font-semibold">App Development</span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Native and cross-platform mobile solutions.
        </p>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e57701] to-[#006457] text-transparent bg-clip-text">
          Build Powerful Mobile Experiences
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Native App Development
            </h3>
            <p className="text-gray-700">
              We develop high-performance apps for Android and iOS using native
              technologies or frameworks like Flutter and React Native.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              E-Commerce Upgrade
            </h3>
            <p className="text-gray-700">
              Upgrade your mobile app with enhanced shopping experiences, better
              UX/UI, and seamless checkout functionalities.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Third-party Integrations
            </h3>
            <p className="text-gray-700">
              Integrate essential services such as payment processors, shipping
              APIs, or cloud storage to boost app functionality.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Logistics & Payment Support
            </h3>
            <p className="text-gray-700">
              Streamline your operations by integrating logistics tracking and
              multiple payment gateways into your mobile app.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Product Research & Audit
            </h3>
            <p className="text-gray-700">
              Gain insights into user behavior, product performance, and market
              trends to refine your mobile app’s offerings.
            </p>
          </div>
        </div>
        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#e57701]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We use the latest frameworks and platforms to deliver robust,
            user-friendly mobile apps.
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              src="https://cdn.worldvectorlogo.com/logos/android-icon.svg"
              alt="Android"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/apple.svg"
              alt="iOS"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/flutter.svg"
              alt="Flutter"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React Native"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
              alt="Firebase"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
