import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Logo } from "./components/Logo";
import { MobileMenu } from "./components/MobileMenu";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import WebsiteDevelopment from "./WebsiteDevelopment";
import AppDevelopment from "./AppDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import GooglePhotography from "./GooglePhotography";
import SocialMediaMarketing from "./SocialMediaMarketing";
import BrandingIdentity from "./BrandingIdentity";

// Add global styles
const globalStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .heading-animate-up {
    animation: fadeInUp 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  .heading-animate-left {
    animation: fadeInLeft 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  .heading-animate-down {
    animation: fadeInDown 0.7s cubic-bezier(0.4,0,0.2,1);
  }
  .animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .flip-container {
    position: relative;
    width: 40px;
    height: 40px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .group:hover .flip-container {
    transform: rotateY(180deg);
  }
  .flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flip-back {
    transform: rotateY(180deg);
  }

  /* Custom Cursor Styles */
  body, * {
    cursor: auto !important;
  }
  
  .custom-cursor {
    width: 8px;
    height: 8px;
    background: #e57701;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.15s cubic-bezier(0.4,0,0.2,1);
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: normal;
  }
  .custom-cursor.heading-hover {
    width: 48px;
    height: 48px;
    background: rgba(255,255,255,0.5);
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
    border: none;
    mix-blend-mode: normal;
  }
  .custom-cursor-dot-inner {
    display: none;
  }
  .hide-system-cursor {
    cursor: none !important;
  }

  h1:hover ~ .custom-cursor,
  h2:hover ~ .custom-cursor,
  h3:hover ~ .custom-cursor,
  .heading:hover ~ .custom-cursor {
    transform: translate(-50%, -50%) scale(2);
    background: #006457;
  }

  h1:hover ~ .custom-cursor-follower,
  h2:hover ~ .custom-cursor-follower,
  h3:hover ~ .custom-cursor-follower,
  .heading:hover ~ .custom-cursor-follower {
    transform: translate(-50%, -50%) scale(1.5);
    border-color: #006457;
    background: rgba(0, 100, 87, 0.1);
  }

  a:hover ~ .custom-cursor,
  button:hover ~ .custom-cursor {
    transform: translate(-50%, -50%) scale(1.5);
    background: #006457;
  }

  a:hover ~ .custom-cursor-follower,
  button:hover ~ .custom-cursor-follower {
    transform: translate(-50%, -50%) scale(1.2);
    border-color: #006457;
    background: rgba(0, 100, 87, 0.1);
  }
`;

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  active?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 1500,
  active = true,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = end / (duration / 16);
    let raf: number;

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration, active]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Get viewport center for initial position
  const initialX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const initialY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const [cursorPosition, setCursorPosition] = useState({
    x: initialX,
    y: initialY,
  });
  const headings = [
    {
      text: (
        <>
          Weaving Your Brand's{" "}
          <span className="font-bold text-[#e57701]">
            Digital Success Story
          </span>
        </>
      ),
      anim: "heading-animate-up",
    },
    {
      text: (
        <>
          Elevate Your{" "}
          <span className="font-bold text-[#e57701]">Digital Presence</span>
        </>
      ),
      anim: "heading-animate-left",
    },
    {
      text: (
        <>
          <span className="font-bold text-[#e57701]">Data-Driven</span>{" "}
          Marketing Strategies
        </>
      ),
      anim: "heading-animate-down",
    },
  ];
  const [currentHeading, setCurrentHeading] = useState(0);
  const [animateClass, setAnimateClass] = useState(headings[0].anim);
  const [cursorOnHeading, setCursorOnHeading] = useState(false);
  const [aboutRef, aboutInView] = useInView(0.3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => {
        const next = (prev + 1) % headings.length;
        setAnimateClass(headings[next].anim);
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    // Heading hover effect
    const handleHeadingEnter = () => setCursorOnHeading(true);
    const handleHeadingLeave = () => setCursorOnHeading(false);
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((h) => {
      h.addEventListener("mouseenter", handleHeadingEnter);
      h.addEventListener("mouseleave", handleHeadingLeave);
    });
    return () => {
      headings.forEach((h) => {
        h.removeEventListener("mouseenter", handleHeadingEnter);
        h.removeEventListener("mouseleave", handleHeadingLeave);
      });
    };
  }, []);

  // Add a class to body to hide system cursor on heading hover
  useEffect(() => {
    if (cursorOnHeading) {
      document.body.classList.add("hide-system-cursor");
    } else {
      document.body.classList.remove("hide-system-cursor");
    }
    return () => {
      document.body.classList.remove("hide-system-cursor");
    };
  }, [cursorOnHeading]);

  return (
    <>
      <style>{globalStyles}</style>
      <div
        className={`custom-cursor${cursorOnHeading ? " heading-hover" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      <Routes>
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/google-photography" element={<GooglePhotography />} />
        <Route
          path="/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route path="/branding-identity" element={<BrandingIdentity />} />
        <Route
          path="/"
          element={
            <React.Fragment>
              <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <header
                  id="home"
                  className="relative overflow-hidden w-full min-h-screen flex items-center"
                  role="banner"
                >
                  {/* Video Background */}
                  <div className="hero-bg-video absolute inset-0 z-0">
                    <video
                      autoPlay
                      muted
                      loop
                      id="myVideo"
                      className="w-full h-full object-cover"
                    >
                      <source
                        src="images/Dark Blue Uplifting Abstract Corporate Entrepreneurs YouTube Video Intro.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  <div className="w-full max-w-none px-0 relative z-10">
                    <nav
                      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
                        isScrolled
                          ? "bg-[#002824]/95 backdrop-blur-sm shadow-lg"
                          : ""
                      }`}
                    >
                      <div className="w-full max-w-none px-0 py-4 flex justify-between items-center">
                        <div className="flex items-center space-x-0">
                          <Logo />
                        </div>

                        <ul className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
                          <li>
                            <a
                              href="#home"
                              className="hover:text-white transition-colors focus-ring rounded-lg px-3 py-2"
                            >
                              Home
                            </a>
                          </li>

                          <li>
                            <a
                              href="#pioneering-ideas"
                              className="hover:text-white transition-colors focus-ring rounded-lg px-3 py-2"
                            >
                              Pioneering Ideas
                            </a>
                          </li>
                          <li>
                            <a
                              href="#about"
                              className="hover:text-white transition-colors focus-ring rounded-lg px-3 py-2"
                            >
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#contact"
                              className="hover:text-white transition-colors focus-ring rounded-lg px-3 py-2"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>

                        <div className="flex items-center gap-4">
                          <div className="hidden md:flex items-center gap-4">
                            <a
                              href="https://www.facebook.com/share/1YV6YDNFiY/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-white hover:text-[#e57701] transition-colors focus-ring rounded-full"
                            >
                              <Facebook className="w-5 h-5" />
                            </a>
                            <a
                              href="https://www.instagram.com/brandweave_?igsh=MXRiOHV2Z2FmMHNwZg=="
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-white hover:text-[#e57701] transition-colors focus-ring rounded-full"
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/brandweave-tech-0b6329359"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-white hover:text-[#e57701] transition-colors focus-ring rounded-full"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                              href="https://x.com/Brandweave_?t=x4WTxYiVZ1GQfMFbRL7bIg&s=09"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-white hover:text-[#e57701] transition-colors focus-ring rounded-full"
                            >
                              <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                              >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.77 2.14-4.77 4.77 0 .37.04.73.12 1.08C7.69 5.7 4.07 3.8 1.64.9c-.41.7-.65 1.52-.65 2.4 0 1.66.85 3.13 2.15 3.99A4.48 4.48 0 01.96 6.1v.06c0 2.32 1.65 4.25 3.84 4.69-.4.11-.82.17-1.25.17-.31 0-.6-.03-.89-.08.6 1.87 2.34 3.23 4.4 3.27A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
                              </svg>
                            </a>
                          </div>
                          <a
                            href="tel:+916305572635"
                            className="bg-[#e57701] p-3 rounded-full font-semibold hover:bg-[#ff8c1a] hover:scale-105 transition-all duration-300 shadow-lg focus-ring flex items-center justify-center"
                          >
                            <Phone className="w-5 h-5 text-white" />
                          </a>
                          <MobileMenu
                            isOpen={isMenuOpen}
                            onToggle={() => setIsMenuOpen(!isMenuOpen)}
                          />
                        </div>
                      </div>
                    </nav>

                    <div className="hero-content text-white pt-32 pb-20">
                      <div className="section-title max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-light mb-8 animate-fade-in">
                          Welcome to{" "}
                          <span className="font-bold">BrandWeave</span>..!
                        </h2>
                        <div className="relative h-24 flex items-center justify-center">
                          <h1
                            key={currentHeading}
                            className={`text-5xl md:text-6xl font-light mb-8 transition-all duration-700 ${animateClass}`}
                          >
                            {headings[currentHeading].text}
                          </h1>
                        </div>
                      </div>

                      <div className="hero-content-body flex flex-col items-center mt-12">
                        <div className="hero-video-content max-w-2xl mx-auto text-center mb-12">
                          <p className="text-lg">
                            At BrandWeave, we transform your vision into reality
                            by creating engaging, impactful digital experiences
                            that resonate with audiences and deliver measurable
                            results. From tailored website development to
                            dynamic content creation and innovative marketing
                            strategies.
                          </p>
                        </div>

                        <div className="hero-btn">
                          <a
                            href="#contact"
                            className="btn-default bg-[#e57701] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff8c1a] hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg focus-ring"
                          >
                            Get in touch
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Trust Badges Marquee Section */}
                <section className="w-full py-6 bg-white border-b border-gray-100">
                  <div className="overflow-hidden relative">
                    <div className="marquee flex items-center gap-8 whitespace-nowrap">
                      {/* Example service badges - replace or add more as needed */}
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Website Development
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        App Development
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Digital Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Google Photography
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Social Media Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Photography
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Branding & Identity
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        E-commerce Setup
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Performance Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Brand Consultation
                      </span>
                      {/* Repeat for smooth loop */}
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Website Development
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        App Development
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Digital Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Google Photography
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Social Media Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Photography
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Branding & Identity
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        E-commerce Setup
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#006457] font-semibold text-lg shadow-sm border border-gray-200">
                        Performance Marketing
                      </span>
                      <span className="px-6 py-2 bg-[#f6f6f7] rounded-full text-[#e57701] font-semibold text-lg shadow-sm border border-gray-200">
                        Brand Consultation
                      </span>
                    </div>
                  </div>
                  <style>{`
                      .marquee {
                        animation: marquee 30s linear infinite;
                      }
                      @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                    `}</style>
                </section>

                {/* Add this after the header/carousel and before the services section */}
                <section id="pioneering-ideas" className="py-20 bg-white">
                  <div className="w-full max-w-none px-0">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
                        Pioneering Ideas
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We transform innovative concepts into digital realities
                        with our comprehensive solutions
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/* Website Development */}
                      <Link
                        to="/website-development"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#006457] to-[#004036] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/Website Development.png"
                                alt="Website Development Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/Website Development.png"
                                alt="Website Development Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Website Development
                          </h3>
                          <p className="text-white/90">
                            Comprehensive web solutions for your digital
                            presence
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>E-commerce Setup</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Web Development</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Third-party Integrations</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Website Audit</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Technical SEO Audit</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Keyword Trend Analysis</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Competitor Mapping</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2048px-Adobe_Photoshop_CC_icon.svg.png"
                                alt="Photoshop"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2048px-Adobe_Illustrator_CC_icon.svg.png"
                                alt="Illustrator"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2048px-Adobe_InDesign_CC_icon.svg.png"
                                alt="InDesign"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2048px-Adobe_After_Effects_CC_icon.svg.png"
                                alt="After Effects"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2048px-Adobe_Premiere_Pro_CC_icon.svg.png"
                                alt="Premiere Pro"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* App Development */}
                      <Link
                        to="/app-development"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/App Development1.png"
                                alt="App Development Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/App Development1.png"
                                alt="App Development Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            App Development
                          </h3>
                          <p className="text-white/90">
                            Native and cross-platform mobile solutions
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Native App Development</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>E-Commerce Upgrade</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Third-party Integrations</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Logistics & Payment Support</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Product Research & Audit</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://cdn.worldvectorlogo.com/logos/flutter.svg"
                                alt="Flutter"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                                alt="React Native"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Digital Marketing */}
                      <Link
                        to="/digital-marketing"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#006457] to-[#004036] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/Digital Marketing.png"
                                alt="Digital Marketing Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/Digital Marketing.png"
                                alt="Digital Marketing Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Digital Marketing
                          </h3>
                          <p className="text-white/90">
                            Comprehensive digital marketing strategies
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Social Media Ads</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Google & Shopping Ads</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>YouTube & Email Marketing</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>WhatsApp Marketing</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Amazon & Flipkart Marketing</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>SEO Optimization</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/Instagram.svg"
                                alt="Instagram"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/Facebook.svg"
                                alt="Facebook"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/GAds.svg"
                                alt="Google Ads"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/05/YouTube.svg"
                                alt="YouTube"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/WhatsApp.svg"
                                alt="WhatsApp"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Google Photography */}
                      <Link
                        to="/google-photography"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/Google Photography.png"
                                alt="Google Photography Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/Google Photography.png"
                                alt="Google Photography Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Google Photography
                          </h3>
                          <p className="text-white/90">
                            Professional photography services
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Product Photoshoot</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Packaging Design Photography</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Google Business Profile Photos</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                                alt="Camera"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                                alt="360"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                                alt="Google"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Social Media Marketing */}
                      <Link
                        to="/social-media-marketing"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#006457] to-[#004036] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/Social Media Marketing.png"
                                alt="Social Media Marketing Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/Social Media Marketing.png"
                                alt="Social Media Marketing Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Social Media Marketing
                          </h3>
                          <p className="text-white/90">
                            Engaging social media strategies
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Social Media Ads</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>YouTube & WhatsApp Marketing</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Brand Identity Design</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Content Copywriting</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Marketing Collaterals</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#e57701] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Social Media Audit</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/Instagram.svg"
                                alt="Instagram"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://ekommerce360.com/wp-content/uploads/2022/04/Facebook.svg"
                                alt="Facebook"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                                alt="YouTube"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                alt="WhatsApp"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* Branding & Identity */}
                      <Link
                        to="/branding-identity"
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 group block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e57701]"
                      >
                        <div className="bg-gradient-to-r from-[#e57701] to-[#cc6a00] p-6 text-white">
                          <div className="flip-container mb-4">
                            <div className="flip-front">
                              <img
                                src="images/Branding & Identity.png"
                                alt="Branding & Identity Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                            <div className="flip-back">
                              <img
                                src="images/Branding & Identity.png"
                                alt="Branding & Identity Icon"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            Branding & Identity
                          </h3>
                          <p className="text-white/90">
                            Comprehensive brand development
                          </p>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Brand Strategy</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Brand Guidelines</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Brand Identity Design</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Copywriting</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="w-5 h-5 text-[#006457] mr-2 mt-0.5 flex-shrink-0" />
                              <span>Marketing Collaterals</span>
                            </li>
                          </ul>
                          {/* Platform/Tool Icons */}
                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex gap-4 justify-center items-center">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2048px-Adobe_Photoshop_CC_icon.svg.png"
                                alt="Photoshop"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2048px-Adobe_Illustrator_CC_icon.svg.png"
                                alt="Illustrator"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/2048px-Adobe_InDesign_CC_icon.svg.png"
                                alt="InDesign"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2048px-Adobe_After_Effects_CC_icon.svg.png"
                                alt="After Effects"
                                className="w-10 h-10 object-contain"
                              />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2048px-Adobe_Premiere_Pro_CC_icon.svg.png"
                                alt="Premiere Pro"
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="mt-16 text-center">
                      <a
                        href="#contact"
                        className="bg-[#e57701] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#ff8c1a] hover:scale-105 transition-all duration-300 inline-flex items-center shadow-lg focus-ring mx-auto"
                      >
                        Get Started With Us <ChevronRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </section>

                <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
                  <div className="w-full max-w-none px-0">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
                          About BrandWeave
                        </h2>
                        <p className="text-lg text-gray-600">
                          Crafting digital excellence since 2015
                        </p>
                      </div>

                      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          {/* Image column */}
                          <div className="flex justify-center">
                            <img
                              src="images/about us.png"
                              alt="About BrandWeave"
                              className="rounded-2xl w-full max-w-xs h-auto shadow-md object-contain transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            />
                          </div>
                          {/* Text column */}
                          <div>
                            <div className="space-y-4 text-gray-600">
                              <p>
                                Digital Marketing that Weaves Success Into Every
                                Brand
                              </p>
                              <p>
                                At Brand Weave, we don't just market—we craft,
                                connect, and grow your brand through creative
                                digital strategies. Whether it's building a bold
                                website, running smart ad campaigns, creating
                                compelling content, or boosting your search
                                rankings on Google, we bring everything your
                                brand needs under one roof.
                              </p>
                              <p>
                                Our innovative ideas drive growth for small,
                                medium, and large enterprises, turning concepts
                                into impact and presence into performance.
                              </p>
                              <p>
                                Let's weave your story into something
                                remarkable.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-[#006457]">
                                <Counter end={10} active={aboutInView} />
                              </div>
                              <div className="text-gray-500">
                                Years Experience
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-[#e57701]">
                                <Counter
                                  end={200}
                                  suffix="+"
                                  active={aboutInView}
                                />
                              </div>
                              <div className="text-gray-500">
                                Clients Served
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-[#006457]">
                                <Counter
                                  end={50}
                                  suffix="+"
                                  active={aboutInView}
                                />
                              </div>
                              <div className="text-gray-500">
                                Projects Completed
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-[#e57701]">
                                <Counter
                                  end={100}
                                  suffix="%"
                                  active={aboutInView}
                                />
                              </div>
                              <div className="text-gray-500">
                                Client Satisfaction
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Add this after the Services section and before Contact section */}
                <section
                  id="why-choose-us"
                  className="py-20 bg-gradient-to-br from-[#006457]/5 via-white to-[#e57701]/5"
                >
                  <div className="w-full max-w-none px-0">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
                        Why Choose BrandWeave
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover what makes us the preferred digital partner for
                        businesses
                      </p>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-16">
                      {/* Box 1 */}
                      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                          <img
                            src="images/Who We Are.avif"
                            alt="Who We Are"
                            className="h-[180px] w-auto rounded-2xl object-contain bg-[#f6f6f7] transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl touch-manipulation"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">
                            Who We Are
                          </h3>
                          <p className="text-gray-600">
                            Brandweave Tech Solutions is your strategic partner
                            in navigating the digital landscape. We are
                            passionate about helping brands build a powerful,
                            lasting digital presence through innovation,
                            precision, and creativity. Our mission is to elevate
                            your business by connecting strategy with execution
                            in the digital space.
                          </p>
                        </div>
                      </div>
                      {/* Box 2 (reverse) */}
                      <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-8">
                          <img
                            src="images/What We Do.avif"
                            alt="What We Do"
                            className="h-[180px] w-auto rounded-2xl object-contain bg-[#f6f6f7] transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl touch-manipulation"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">
                            What We Do
                          </h3>
                          <p className="text-gray-600">
                            We offer tailored, end-to-end digital marketing and
                            branding solutions that create real impact. Our core
                            expertise includes: Performance Marketing, Content
                            Creation, Website Design & Development, Creative
                            Strategy & Visual Storytelling. Each service is
                            designed to drive measurable growth and long-term
                            brand value.
                          </p>
                        </div>
                      </div>
                      {/* Box 3 */}
                      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                          <img
                            src="images/How We Work.avif"
                            alt="How We Work"
                            className="h-[180px] w-auto rounded-2xl object-contain bg-[#f6f6f7] transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl touch-manipulation"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">
                            How We Work
                          </h3>
                          <p className="text-gray-600">
                            We don't work for our clients—we work with them. At
                            Brandweave, we believe in deep collaboration. Your
                            vision, goals, and success are the foundation of our
                            approach. From the first consultation to campaign
                            execution and performance analysis, we maintain:
                            Transparent communication, regular milestone
                            reviews, and a fully collaborative process.
                          </p>
                        </div>
                      </div>
                      {/* Box 4 (reverse) */}
                      <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 md:p-8 max-w-3xl mx-auto">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:ml-8">
                          <img
                            src="images/Our Promise.avif"
                            alt="Our Promise"
                            className="h-[180px] w-auto rounded-2xl object-contain bg-[#f6f6f7] transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-105 active:shadow-2xl touch-manipulation"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">
                            Our Promise
                          </h3>
                          <p className="text-gray-600">
                            We guarantee measurable results, exceptional
                            quality, and ongoing support. Your success is our
                            top priority, and we won't stop until you're
                            thrilled with the outcome.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Join Agency Social CTA Section */}
                <section className="w-full bg-[#004036] py-20">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-[#e57701] text-2xl">*</span>
                          <span className="uppercase tracking-widest text-white text-sm font-semibold">
                            Join Agency
                          </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
                          Join our{" "}
                          <span className="font-bold text-[#e57701]">
                            agency
                          </span>{" "}
                          of creative
                          <br className="hidden md:block" /> innovators
                        </h2>
                      </div>
                      <div className="max-w-xl text-white/80 text-lg">
                        Join our creative community to collaborate, innovate,
                        and thrive together. We welcome passionate individuals
                        eager to make.
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/share/1YV6YDNFiY/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#004036] rounded-[2.5rem] border border-white/20 flex items-center p-6 gap-6 hover:border-[#e57701] transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-[#e57701] flex items-center justify-center">
                            <svg
                              fill="white"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-2xl font-bold mb-1">
                            Facebook
                          </div>
                          <div className="text-white/70 text-lg">
                            @BrandWeave
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white group-hover:bg-[#e57701] group-hover:border-[#e57701] transition-all duration-300">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M7 17l9-9M8 7h8v8" />
                            </svg>
                          </span>
                        </div>
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/brandweave_?igsh=MXRiOHV2Z2FmMHNwZg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#004036] rounded-[2.5rem] border border-white/20 flex items-center p-6 gap-6 hover:border-[#e57701] transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-[#e57701] flex items-center justify-center">
                            {/* Official Instagram SVG */}
                            <svg
                              viewBox="0 0 448 512"
                              className="w-10 h-10"
                              fill="white"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 7.7 353.3 6C317.9 4.3 298.7 0 224 0S130.1 4.3 94.7 6C59.4 7.7 28 15.9 2.7 41.2S7.7 123.4 6 158.7C4.3 194.1 0 213.3 0 288s4.3 93.9 6 129.3c1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2C130.1 507.7 149.3 512 224 512s93.9-4.3 129.3-6c35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.4 6-54.6 6-129.3s-4.3-93.9-6-129.3zm-48.7 292c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-2xl font-bold mb-1">
                            Instagram
                          </div>
                          <div className="text-white/70 text-lg">
                            @BrandWeave
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white group-hover:bg-[#e57701] group-hover:border-[#e57701] transition-all duration-300">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M7 17l9-9M8 7h8v8" />
                            </svg>
                          </span>
                        </div>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/brandweave-tech-0b6329359"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#004036] rounded-[2.5rem] border border-white/20 flex items-center p-6 gap-6 hover:border-[#e57701] transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-[#e57701] flex items-center justify-center">
                            {/* Official LinkedIn SVG */}
                            <svg
                              viewBox="0 0 448 512"
                              className="w-10 h-10"
                              fill="white"
                            >
                              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0153.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-2xl font-bold mb-1">
                            LinkedIn
                          </div>
                          <div className="text-white/70 text-lg">
                            BrandWeave
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white group-hover:bg-[#e57701] group-hover:border-[#e57701] transition-all duration-300">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M7 17l9-9M8 7h8v8" />
                            </svg>
                          </span>
                        </div>
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/Brandweave_?t=x4WTxYiVZ1GQfMFbRL7bIg&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#004036] rounded-[2.5rem] border border-white/20 flex items-center p-6 gap-6 hover:border-[#e57701] transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-[#e57701] flex items-center justify-center">
                            <svg
                              fill="white"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.63 0-4.77 2.14-4.77 4.77 0 .37.04.73.12 1.08C7.69 5.7 4.07 3.8 1.64.9c-.41.7-.65 1.52-.65 2.4 0 1.66.85 3.13 2.15 3.99A4.48 4.48 0 01.96 6.1v.06c0 2.32 1.65 4.25 3.84 4.69-.4.11-.82.17-1.25.17-.31 0-.6-.03-.89-.08.6 1.87 2.34 3.23 4.4 3.27A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-2xl font-bold mb-1">
                            Twitter
                          </div>
                          <div className="text-white/70 text-lg">
                            @BrandWeave
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white group-hover:bg-[#e57701] group-hover:border-[#e57701] transition-all duration-300">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M7 17l9-9M8 7h8v8" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section
                  id="contact"
                  className="py-20 bg-gradient-to-br from-[#006457]/5 via-white to-[#e57701]/5 relative"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')] opacity-5 bg-cover bg-center"></div>
                  <div className="w-full max-w-none px-0">
                    <div className="max-w-5xl mx-auto px-0 sm:px-4">
                      <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#006457] to-[#e57701] text-transparent bg-clip-text">
                          Let's Create Something Amazing
                        </h2>
                        <p className="text-lg text-gray-600">
                          Transform your digital presence with BrandWeave. We're
                          here to help you succeed.
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                          <h3 className="text-2xl font-bold mb-6 text-[#006457]">
                            Get in Touch
                          </h3>
                          <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                              <div className="bg-[#006457]/10 p-3 rounded-2xl">
                                <Mail className="w-6 h-6 text-[#006457]" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  Email Us
                                </h4>
                                <a
                                  href="mailto:brandweavetech@gmail.com"
                                  className="text-[#006457] hover:text-[#007f6e] transition-colors"
                                >
                                  brandweavetech@gmail.com
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start space-x-4">
                              <div className="bg-[#006457]/10 p-3 rounded-2xl">
                                <Phone className="w-6 h-6 text-[#006457]" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  Call Us
                                </h4>
                                <a
                                  href="tel:+916305572635"
                                  className="text-[#006457] hover:text-[#007f6e] transition-colors"
                                >
                                  +91 630 557 2635
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start space-x-4">
                              <div className="bg-[#006457]/10 p-3 rounded-2xl">
                                <MapPin className="w-6 h-6 text-[#006457]" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  Visit Us
                                </h4>
                                <p className="text-gray-600">
                                  504, Sirimalle Tower, Yashoda Hospital Road,
                                  <br />
                                  Somajiguda, Hyderabad,
                                  <br />
                                  Telangana 500082
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#006457] to-[#004036] rounded-3xl p-8 text-white shadow-xl">
                          <h3 className="text-2xl font-bold mb-6">
                            Ready to Start?
                          </h3>
                          <p className="mb-8 text-white/90">
                            Whether you're launching a new business or elevating
                            your digital presence, we're here to help you
                            succeed in the digital world.
                          </p>
                          <div className="space-y-4">
                            <a
                              href="mailto:brandweavetech@gmail.com?subject=Business%20Inquiry%20-%20BrandWeave%20Services&body=Dear%20BrandWeave%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20digital%20marketing%20and%20branding%20services.%0A%0APlease%20provide%20information%20about%3A%0A-%20Your%20service%20packages%0A-%20Pricing%20details%0A-%20Timeline%20expectations%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards"
                              className="inline-flex w-full items-center justify-center gap-2 bg-white text-[#006457] py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Mail className="w-5 h-5" />
                              Send us an Email
                            </a>
                            <a
                              href="tel:+916305572635"
                              className="inline-flex w-full items-center justify-center gap-2 bg-[#e57701] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#ff8c1a] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                            >
                              <Phone className="w-5 h-5" />
                              Call Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <footer
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12"
                  role="contentinfo"
                >
                  <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex items-center space-x-0 mb-4 md:mb-0">
                        <Logo />
                      </div>
                      <div className="text-gray-400 text-sm">
                        © BrandWeave. All rights reserved. |Powered by{" "}
                        <a
                          href="https://vrnd.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#e57701] hover:text-[#ff8c1a] transition-colors duration-300"
                        >
                          VRND Business Solutions
                        </a>
                        |
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </>
  );
}

export default App;
