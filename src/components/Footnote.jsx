import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Top dark red bar */}
      <div className="h-1 bg-red-900"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-base">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-base">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-base">Team</a></li>
            </ul>
          </div>
          
          {/* Socials */}
          <div>
  <h3 className="text-white text-lg font-bold mb-6 tracking-wide">ECELL SOCIALS</h3>
  <div className="flex gap-6">
    <a
      href="https://www.instagram.com/ecell.bmsit?igsh=dW56aGtuY3pnNTBl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-red-600 transition-colors"
    >
      <Instagram size={28} />
    </a>
    <a
      href="https://www.linkedin.com/company/ecellbmsit/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-red-600 transition-colors"
    >
      <Linkedin size={28} />
    </a>
  </div>
</div>

          
          {/* Policy Links */}
          <div>
      <h3 className="text-white text-lg font-bold mb-6 tracking-wide">POLICY LINKS</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="https://drive.google.com/drive/folders/1YExC_F-dCmKTtmUoJz1rX3-Ww_yxTkYL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors text-base"
          >
            Terms & Conditions
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1YExC_F-dCmKTtmUoJz1rX3-Ww_yxTkYL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors text-base"
          >
            Code of Conduct
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1YExC_F-dCmKTtmUoJz1rX3-Ww_yxTkYL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors text-base"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
    </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            2025 E-Cell
          </div>
          <div className="text-gray-500 text-sm">
            MADE BY E-CELL BMSIT&M
          </div>
        </div>
      </div>
    </footer>
  );
}