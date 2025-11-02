import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden w-full min-h-screen">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #dc2626 1px, transparent 1px),
            linear-gradient(to bottom, #dc2626 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Top red bar */}
      <div className="h-1 bg-red-600 relative z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-28 lg:py-36">
        {/* Main grid - swapped columns: Contact (left), Institute (center), Quick Links (right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Contact - moved to left (md:order-1) */}
          <div className="md:order-1">
            <h3 className="text-red-600 text-xl md:text-2xl font-bold mb-6 tracking-wide border-b-2 border-red-600 inline-block pb-2">
              Contact Us
            </h3>

            <ul className="space-y-5 mt-8">
              <li>
                <a
                  href="tel:+918867162414"
                  aria-label="Call Maxson Mathew"
                  title="Call Maxson Mathew"
                  className="text-white hover:text-red-600 transition-colors flex items-center gap-3 text-lg"
                >
                  <Phone size={18} className="text-red-500" />
                  <span>Maxson Mathew</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919008551551"
                  aria-label="Call Mohit Monnappa T N"
                  title="Call Mohit Monnappa T N"
                  className="text-white hover:text-red-600 transition-colors flex items-center gap-3 text-lg"
                >
                  <Phone size={18} className="text-red-500" />
                  <span>Mohit Monnappa T N</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919141194259"
                  aria-label="Call Vaibhav B"
                  title="Call Vaibhav B"
                  className="text-white hover:text-red-600 transition-colors flex items-center gap-3 text-lg"
                >
                  <Phone size={18} className="text-red-500" />
                  <span>Vaibhav B</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919500144964"
                  aria-label="Call Nishitha Bodipati"
                  title="Call Nishitha Bodipati"
                  className="text-white hover:text-red-600 transition-colors flex items-center gap-3 text-lg"
                >
                  <Phone size={18} className="text-red-500" />
                  <span>Nishitha Bodipati</span>
                </a>
              </li>
            </ul>
            <div className="flex gap-6 mt-10">
              <a
                href="https://www.instagram.com/ecell.bmsit?igsh=dW56aGtuY3pnNTBl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Instagram size={32} />
              </a>

              <a
                href="https://discord.gg/FTSdVUku6Y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-white hover:text-red-600 transition-colors"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/ecellbmsit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Linkedin size={32} />
              </a>

              <a
                href="mailto:ecell@bmsit.in"
                aria-label="Email"
                className="text-white hover:text-red-600 transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

          {/* Institute Info - center */}
          <div className="text-center md:order-2 flex flex-col items-center justify-center">
            <h1 className="text-red-600 text-4xl md:text-3xl lg:text-4xl font-extrabold mb-3 tracking-wider leading-tight text-center">
              BMS Institute of
            </h1>
            <h1 className="text-red-600 text-4xl md:text-3xl lg:text-4xl font-extrabold mb-3 tracking-wider leading-tight text-center">
              Technology and
            </h1>
            <h1 className="text-red-600 text-4xl md:text-3xl lg:text-4xl font-extrabold mb-6 tracking-wider leading-tight text-center">
              Management
            </h1>

            <p className="text-white text-base md:text-lg max-w-md leading-relaxed">
              Doddaballapur Main Road, Avalahalli,
              <br />
              Yelahanka, Bengaluru, Karnataka
              <br />
              560064
            </p>
          </div>

          {/* Quick Links - moved to right (md:order-3) */}
          <div className="md:order-3 md:text-right">
            <h3 className="text-red-600 text-xl md:text-2xl font-bold mb-6 tracking-wide border-b-2 border-red-600 inline-block pb-2">
              Quick Links
            </h3>

            <ul className="space-y-5 mt-8">
              <li>
                <a
                  href="https://maps.app.goo.gl/RyJvsZVLrH41qCJj7"
                  className="text-white hover:text-red-600 transition-colors text-lg"
                >
                  Campus Map
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/11r5pY0Dj753Wgoakf-dTFa_RXWh60Q13/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition-colors text-lg"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1cKVELBjOxDpR2r8XHxjsIPd6tag_Y5BS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition-colors text-lg"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ZapVG3eKR56DF4k8X5u7l8Kv89z-f0Mj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition-colors text-lg"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-red-600/30 text-center">
          <p className="text-white text-base">Made with ❤️ by E-CELL BMSIT&M</p>
        </div>
      </div>
    </footer>
  );
}
