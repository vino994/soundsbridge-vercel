import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "hearing-aids" },
  { name: "Category", id: "hearing-loss" },
  { name: "Services", id: "resources" },
  { name: "Trial", id: "about-us" },
  { name: "Contact", id: "footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastScrollY = useRef(0);

  /* SCROLL LOGIC */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 20);

      // 🔥 hide/show navbar
      if (scrollTop > lastScrollY.current && scrollTop > 120) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = scrollTop;

      // 🔥 active section
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (scrollTop >= top && scrollTop < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* 🔥 SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-orange-500 z-[60]"
        style={{ width: `${progress}%` }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNav ? 0 : -90 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 w-full h-[80px] z-50
          ${scrolled
            ? "bg-gray-900/70 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-gray-900"}
        `}
      >
        <div className="container mx-auto h-full flex items-center px-6">

          {/* LOGO */}
        <div
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => scrollToSection("home")}
>
  <img
    src={logo}
    alt="Logo"
    className="h-20 w-16 object-cover"
  />

  <span
    className="
      hidden md:inline
      text-2xl
      tracking-widest
      bg-gradient-to-r
      from-orange-400
      via-pink-500
      to-purple-500
      bg-clip-text
      text-transparent
      drop-shadow-sm
    "
    style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
  >
    SOUNDSBRIDGE
  </span>
</div>


          {/* DESKTOP MENU */}
          <ul className="hidden md:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-white font-medium relative"
                >
                  {link.name}

                  {/* 🔥 ACTIVE DOT */}
                  {active === link.id && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+918920846756" className="text-white hover:text-orange-400">
              <FaPhoneAlt />
            </a>

            <a
              href="https://wa.me/918920846756"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green-400 text-xl"
            >
              <FaWhatsapp />
            </a>

            <button
              onClick={() => scrollToSection("about-us")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold"
            >
              Free Trial
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-auto text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* 🔥 FRAMER MOTION MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-slate-900 px-6 pt-6 pb-8"
            >
              <h2 className="text-white text-2xl font-extrabold text-center mb-6">
                SOUNDSBRIDGE
              </h2>

              <ul className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`text-lg ${
                        active === link.id
                          ? "text-orange-400"
                          : "text-white"
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center gap-6 mt-6">
                <a href="tel:+918920846756" className="text-white text-xl">
                  <FaPhoneAlt />
                </a>
                <a
                  href="https://wa.me/918920846756"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 text-2xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 🔥 FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918920846756"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default Navbar;
