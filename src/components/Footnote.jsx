import { Linkedin, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function Footnote() {
  const [ecellLogoError, setEcellLogoError] = useState(false);

  return (
    <footer className="border-t border-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Left Section - Logos */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* ECELL Logo Placeholder */}
            <div className="flex items-center gap-3">
              {!ecellLogoError ? (
                <img 
                  src="/ecelllogo.png" 
                  alt="ECELL" 
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                  onError={() => setEcellLogoError(true)}
                />
              ) : (
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">ECELL</span>
                </div>
              )}
            </div>
            
            {/* CodeRed Logo and Website */}
            <div className="flex items-center gap-3">
              <img 
                src="/crlogo.png" 
                alt="CodeRed 3.0" 
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
              />
              <a 
                href="https://codered3.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-600 transition-colors text-sm sm:text-base font-medium"
              >
                codered3.dev
              </a>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/codered3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/codered3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            
            {/* Mail */}
            <a
              href="mailto:contact@codered3.dev"
              className="text-gray-400 hover:text-red-600 transition-colors p-2 hover:bg-gray-900 rounded-lg"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 CodeRed 3.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
