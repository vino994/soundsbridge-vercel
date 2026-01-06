import { useEffect, useState } from "react";

import img1 from "../assets/hearing-1.webp";
import img2 from "../assets/hearing-2.jpg";
import img3 from "../assets/hearing-3.jpg";
import img4 from "../assets/hero-image-3.webp";

const images = [img1, img2, img3, img4];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE EVERY 10 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hearing-aids"
      className="bg-gradient-to-l from-white via-sky to-sky-300 py-16 md:py-24"
      aria-labelledby="about-soundsbridge"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* SEO HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="about-soundsbridge"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4"
            style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
          >
            SOUNDSBRIDGE Hearing Solutions
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg mb-4">
            Trusted hearing aid specialists providing advanced digital hearing
            aids, personalized audiology care, and risk-free hearing aid trials
            for individuals experiencing hearing loss.
          </p>

          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT IMAGE SLIDER */}
          <div className="overflow-hidden rounded-xl shadow-xl animate-fadeLeft">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  loading="lazy"
                  alt={`Hearing aid consultation and fitting at SoundsBridge – Image ${index + 1}`}
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover flex-shrink-0 rounded-xl"
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="animate-fadeRight mt-8 md:mt-0">
            <div className="relative bg-gray-50 p-6 sm:p-4 md:p-10 rounded-xl shadow-md">

              {/* QUOTE */}
              <span className="absolute -top-1 left-4 sm:left-6 text-4xl sm:text-6xl text-blue-600 font-serif">
                “
              </span>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                At <strong>SOUNDSBRIDGE</strong>, we help people overcome hearing
                challenges through advanced hearing aids and professional
                audiology services. Better hearing empowers better communication,
                confidence, and quality of life.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Our process begins with accurate hearing assessment, followed by
                customized hearing aid recommendations and a free hearing aid
                trial. This ensures every solution fits your lifestyle, comfort,
                and hearing needs.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                With expert fitting and ongoing support, we create a reliable
                <em className="font-medium"> bridge </em>
                between hearing technology and everyday life — serving clients
                across Kerala with care and trust.
              </p>

              <span className="absolute -bottom-6 right-4 sm:right-6 text-4xl sm:text-6xl text-blue-600 font-serif">
                ”
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
