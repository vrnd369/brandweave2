import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner/Header */}
      <div className="bg-gradient-to-r from-[#006457] to-[#004036] py-16 px-4 text-white text-center relative">
        <h1 className="text-5xl font-bold mb-2">Website Development</h1>
        <div className="text-lg text-white/80 mb-2">
          <Link to="/" className="hover:underline text-white font-semibold">
            Home
          </Link>{" "}
          &gt; Services &gt;{" "}
          <span className="text-[#e57701] font-semibold">
            Website Development
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mt-4">
          Comprehensive web solutions for your digital presence.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
          Accelerate Your Business Growth
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Feature Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              E-commerce Setup
            </h3>
            <p className="text-gray-700">
              We build robust and scalable e-commerce platforms tailored to your
              business needs. From product catalogs to secure payment gateways,
              we ensure a seamless shopping experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Web Development
            </h3>
            <p className="text-gray-700">
              Custom-designed websites that are responsive, fast, and optimized
              for user engagement. We bring your brand vision to life with
              modern tech and UX best practices.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Third-party Integrations
            </h3>
            <p className="text-gray-700">
              Connect your site with essential tools like CRMs, payment
              gateways, analytics, and more for automation and better
              functionality.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Website Audit
            </h3>
            <p className="text-gray-700">
              A detailed technical and content audit to identify issues, improve
              performance, and enhance overall user experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Technical SEO Audit
            </h3>
            <p className="text-gray-700">
              Ensure your site is indexed, fast-loading, and search-engine
              friendly. We identify crawl issues, broken links, and other
              factors affecting SEO.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#e57701]">
            <h3 className="text-xl font-bold text-[#e57701] mb-2">
              Keyword Trend Analysis
            </h3>
            <p className="text-gray-700">
              Discover trending keywords and search patterns relevant to your
              industry. This helps tailor content and strategy for better reach.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#006457]">
            <h3 className="text-xl font-bold text-[#006457] mb-2">
              Competitor Mapping
            </h3>
            <p className="text-gray-700">
              Analyze competitor websites, SEO, content, and strategy to
              identify opportunities and gaps in your own digital presence.
            </p>
          </div>
        </div>

        {/* Tool Stack Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-[#006457]">
            Our Tool Stack
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl">
            We use industry-leading platforms and tools to deliver robust,
            scalable, and high-performing websites.
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
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
              alt="Shopify"
              className="w-12 h-12 object-contain"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/wix.svg"
              alt="Wix"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
