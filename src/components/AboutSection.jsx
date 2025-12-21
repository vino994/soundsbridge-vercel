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
    <section className="bg-gradient-to-l from-white via-sky to-sky-300 py-16 md:py-24" id="hearing-aids">
      <div className="container mx-auto px-4 md:px-6">

        {/* CENTER HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            SOUNDSBRIDGE
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">

          {/* LEFT SLIDER */}
          <div className="overflow-hidden rounded-xl shadow-xl animate-fadeLeft">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Soundsbridge Hearing"
                  className="w-full h-64 sm:h-80 md:h-[420px] object-cover flex-shrink-0 rounded-xl"
                />
              ))}
            </div>
          </div>

          {/* RIGHT QUOTE CONTENT */}
          <div className="animate-fadeRight mt-8 md:mt-0">
            <div className="relative bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl shadow-md">

              {/* TOP QUOTE */}
              <span className="absolute -top-0.5 sm:-top-0.5 left-4 sm:left-6 text-4xl sm:text-6xl text-blue-600 font-serif">
                “
              </span>

              <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6">
                At <span className="font-semibold text-gray-900">SOUNDSBRIDGE</span>, 
                we believe that better hearing leads to a better life. We provide a 
                seamless journey to optimal hearing, built on precision and 
                personalized care.
              </p>

              <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6">
                Our process begins with state-of-the-art testing to understand your 
                unique hearing profile, followed by a risk-free hearing aid trial 
                so you can experience clarity in everyday life.
              </p>

              <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
                Our expert audiologists ensure a perfect custom fitting — forming a 
                true <span className="italic font-medium">bridge</span> between your 
                hearing and the world around you.
              </p>

              {/* BOTTOM QUOTE */}
              <span className="absolute -bottom-4 sm:-bottom-8 right-4 sm:right-6 text-4xl sm:text-6xl text-blue-600 font-serif">
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
