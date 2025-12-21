import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
      <footer className="bg-gray-900 text-gray-300 py-16" id="footer">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SOUNDSBRIDGE</h2>
            <p className="mb-2">Los Angeles, CA</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Email: info@soundsbridge.com</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hearing-aids" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#hearing-loss" className="hover:text-blue-500">Careers</a></li>
              <li><a href="#about-us" className="hover:text-blue-500">Consulting</a></li>
              <li><a href="#resources" className="hover:text-blue-500">Services</a></li>
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-blue-500 transition"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md text-gray-900 bg-white focus:outline-none"
                required
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/login" target="_blank" rel="noreferrer" className="bg-blue-600 p-3 rounded-full"><FaFacebookF /></a>
              <a href="https://twitter.com/login" target="_blank" rel="noreferrer" className="bg-blue-400 p-3 rounded-full"><FaTwitter /></a>
              <a href="https://linkedin.com/login" target="_blank" rel="noreferrer" className="bg-blue-700 p-3 rounded-full"><FaLinkedinIn /></a>
              <a href="https://instagram.com/accounts/login" target="_blank" rel="noreferrer" className="bg-pink-500 p-3 rounded-full"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SOUNDSBRIDGE. All Rights Reserved.
        </div>
      </footer>

      {/* Newsletter Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg">
          📩 Newsletter will reach your mail soon!
        </div>
      )}

      {/* TERMS & CONDITIONS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full rounded-lg p-6 overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

            <p className="mb-4">
              SoundsBridge provides hearing-related products and consultation services intended to
              improve hearing awareness and accessibility. Our services do not replace professional
              medical diagnosis or treatment by licensed audiologists or physicians.
            </p>

            <p className="mb-4">
              By using our website, free trial programs, or consultation forms, you agree that all
              information provided is accurate to the best of your knowledge. SoundsBridge is not
              responsible for outcomes based on incomplete or incorrect user information.
            </p>

            <p className="mb-4">
              Hearing aid trials and recommendations are subject to individual hearing conditions.
              Results may vary depending on age, hearing loss severity, and usage habits. No
              guarantees are made regarding specific hearing improvements.
            </p>

            <p className="mb-4">
              Personal data collected through our platform is securely stored and used only for
              consultation, communication, and service improvement purposes. We do not sell or share
              user data with third parties without consent.
            </p>

            <p className="mb-4">
              SoundsBridge reserves the right to modify services, pricing, and terms at any time
              without prior notice. Continued use of the website indicates acceptance of updated
              terms.
            </p>

            <p>
              If you have questions regarding hearing health, privacy, or service limitations, we
              strongly recommend consulting a licensed hearing care professional.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
