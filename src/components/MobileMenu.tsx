import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 bg-black border-t border-white/10 animate-slide-down z-50">
          <nav className="px-6 py-4 bg-black">
            <ul className="space-y-6">
              <li>
                <a
                  href="#home"
                  className="flex items-center py-3 px-4 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  onClick={onToggle}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center py-3 px-4 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  onClick={onToggle}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="flex items-center py-3 px-4 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  onClick={onToggle}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pioneering-ideas"
                  className="flex items-center py-3 px-4 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  onClick={onToggle}
                >
                  Pioneering Ideas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center py-3 px-4 text-lg text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                  onClick={onToggle}
                >
                  Contact
                </a>
              </li>
              <li className="pt-4 flex gap-4 justify-center">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-[#e57701] transition-all duration-300 hover:scale-110 hover:rotate-12 focus-ring rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-[#e57701] transition-all duration-300 hover:scale-110 hover:-rotate-12 focus-ring rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white hover:text-[#e57701] transition-all duration-300 hover:scale-110 hover:rotate-12 focus-ring rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M8 11h2v6H8zM9 9a1 1 0 110-2 1 1 0 010 2zm3 2h2v1.5a1.5 1.5 0 003 0V11h2v6h-2v-1.5a1.5 1.5 0 00-3 0V17h-2z" />
                  </svg>
                </a>
                <a
                  href="tel:+916305572635"
                  className="bg-[#e57701] p-3 rounded-full font-semibold hover:bg-[#ff8c1a] transition-all duration-300 shadow-lg focus-ring flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
