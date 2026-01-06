import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setShowPopup(true);
    setEmail("");
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <>
      <footer
        id="footer"
        className="bg-gray-900 text-gray-300 py-16"
        role="contentinfo"
        aria-label="Website Footer"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="SoundsBridge hearing aid clinic logo"
                className="h-10 w-10"
              />
              <h2
                className="text-2xl font-bold tracking-widest
                  bg-gradient-to-r
                  from-orange-400
                  via-pink-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  drop-shadow-sm"
                style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
              >
                SOUNDSBRIDGE
              </h2>
            </div>

            <p className="text-sm mb-3">
              Trusted hearing aid specialists offering professional consultation,
              digital hearing aids, and free hearing aid trials across Kerala.
            </p>

            {/* SEO IMPORTANT */}
            <address className="not-italic text-sm leading-relaxed">
              28/3130, Karthika House,<br />
              Kadavanthara, Ernakulam,<br />
              Kerala – 682020, India
            </address>

            <p className="mt-3 text-sm">
              📞 <a href="tel:+918920846756" className="hover:text-orange-400">+91 89208 46756</a>
            </p>
            <p className="text-sm">
              ✉️ <a href="mailto:info@soundsbridge.com" className="hover:text-orange-400">
                info@soundsbridge.com
              </a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#hearing-aids" className="hover:text-orange-400 transition">
                  About SoundsBridge Hearing Care
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-orange-400 transition">
                  Hearing Aid Services
                </a>
              </li>
              <li>
                <a href="#hearing-loss" className="hover:text-orange-400 transition">
                  Hearing Aid Categories
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-orange-400 transition">
                  Book Free Hearing Aid Trial
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-orange-400 transition"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </nav>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Hearing Care Updates
            </h3>
            <p className="text-sm mb-3">
              Subscribe for hearing health tips, new hearing aid updates, and
              special free trial offers.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md text-gray-900 bg-white focus:outline-none"
                required
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
                aria-label="Subscribe to hearing care newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Follow SoundsBridge
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/login"
                target="_blank"
                rel="noreferrer"
                aria-label="SoundsBridge Facebook"
                className="bg-blue-600 hover:scale-110 transition p-3 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/login"
                target="_blank"
                rel="noreferrer"
                aria-label="SoundsBridge Twitter"
                className="bg-blue-400 hover:scale-110 transition p-3 rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/login"
                target="_blank"
                rel="noreferrer"
                aria-label="SoundsBridge LinkedIn"
                className="bg-blue-700 hover:scale-110 transition p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/accounts/login"
                target="_blank"
                rel="noreferrer"
                aria-label="SoundsBridge Instagram"
                className="bg-pink-500 hover:scale-110 transition p-3 rounded-full"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SoundsBridge Hearing Care. All Rights Reserved.
        </div>
      </footer>

      {/* NEWSLETTER POPUP */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          📩 Thank you for subscribing to SoundsBridge updates!
        </div>
      )}

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg p-6 overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-2xl font-bold"
              aria-label="Close terms and conditions"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Terms & Conditions
            </h2>

            <p className="mb-4">
              SoundsBridge provides hearing aid products and consultation services
              intended to improve hearing awareness and accessibility. These
              services do not replace medical diagnosis by licensed professionals.
            </p>

            <p className="mb-4">
              Hearing aid trials and recommendations depend on individual hearing
              conditions. Results may vary based on usage and severity of hearing loss.
            </p>

            <p className="mb-4">
              Personal data is handled securely and used only for consultation,
              communication, and service improvement purposes.
            </p>

            <p>
              Continued use of this website indicates acceptance of these terms.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
