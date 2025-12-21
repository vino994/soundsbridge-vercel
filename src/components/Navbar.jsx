import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "hearing-aids" },
    { name: "Category", id: "hearing-loss" },
    { name: "Services", id: "resources" },
    { name: "Trial", id: "about-us" },
    { name: "Contact", id: "footer" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-blue-500 fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center">

        {/* LEFT: LOGO */}
        <div className="flex-1">
          <span
            onClick={() => scrollToSection("home")}
            className="text-white text-2xl font-bold cursor-pointer"
          >
            SOUNDSBRIDGE
          </span>
        </div>

        {/* CENTER: MENU */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gray-200 transition font-medium cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT: CONTACT ICONS */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
          <a
            href="tel:+11234567890"
            className="bg-white text-blue-600 p-2 rounded-full hover:bg-gray-100 transition"
            title="Call Us"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="https://wa.me/11234567890"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-6 pt-4 pb-6">
          <ul className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-white text-lg block w-full"
                >
                  {link.name}
                </button>
              </li>
            ))}

            {/* MOBILE CONTACT ICONS */}
            <div className="flex justify-center gap-6 pt-4">
              <a
                href="tel:+11234567890"
                className="bg-white text-blue-600 p-3 rounded-full"
              >
                <FaPhoneAlt />
              </a>
              <a
                href="https://wa.me/11234567890"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white p-3 rounded-full"
              >
                <FaWhatsapp />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
