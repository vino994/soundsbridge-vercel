import { useState } from "react";
import Navbar from "./Navbar.jsx";
import heroImg from "../assets/hero-image.jpg";
import ConsultationFlow from "./ConsultationFlow.jsx";
import FAQSchema from "./FAQSchema";
const HomePage = () => {
  const [openConsultation, setOpenConsultation] = useState(false);

  return (
    // 🔑 padding-top added for fixed navbar
    <div className="relative w-full pt-[80px]">
      <Navbar />
   <FAQSchema />
      {/* HERO SECTION */}
      <section
        className="relative w-full h-[90vh] md:h-[85vh] flex items-center"
        id="home"
      >
        {/* BACKGROUND IMAGE */}
        <img
          src={heroImg}
          alt="Hearing Aid"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
     <div className="relative z-10 container mx-auto px-6 flex items-center h-full">
  <div className="max-w-xl bg-black/30 backdrop-blur-sm p-4 sm:p-6 md:p-10 rounded-lg animate-fadeLeft">

    {/* SEO PRIMARY HEADING */}
    <h1
      className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-snug"
      style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
    >
      Hearing Aids That Can Truly Change Your Life
    </h1>

    {/* SEO SUPPORTING TEXT */}
    <p className="text-xs sm:text-sm md:text-lg text-gray-200 mb-4 sm:mb-6">
      Discover advanced digital hearing aids designed to improve hearing clarity,
      comfort, and confidence. Get a personalized hearing consultation and enjoy a
      risk-free hearing aid trial delivered to your doorstep.
    </p>

    {/* SEO-OPTIMIZED CTA */}
    <button
      onClick={() => setOpenConsultation(true)}
      className="inline-block bg-orange-500 text-white px-3 sm:px-5 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-xs sm:text-sm md:text-lg font-semibold hover:bg-orange-600 transition"
      aria-label="Check eligibility for free hearing aid trial"
    >
      Check Eligibility for a Free Hearing Aid Trial
    </button>
  </div>
</div>

      </section>

      {/* CONSULTATION MODAL */}
      {openConsultation && (
        <ConsultationFlow onClose={() => setOpenConsultation(false)} />
      )}
    </div>
  );
};

export default HomePage;
