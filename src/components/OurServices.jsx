import React from "react";
import hearingTestImg from "../assets/hearing-1.webp";
import hearingAidImg from "../assets/hearing-2.jpg";
import consultationImg from "../assets/hearing-3.jpg";
import repairImg from "../assets/hero-image.jpg";

const services = [
  {
    id: 1,
    title: "Comprehensive Hearing Test",
    description:
      "Get a detailed analysis of your hearing profile using state-of-the-art testing equipment.",
    image: hearingTestImg,
  },
  {
    id: 2,
    title: "Hearing Aid Fittings",
    description:
      "Personalized fittings for premium hearing aids, ensuring comfort and clarity.",
    image: hearingAidImg,
  },
  {
    id: 3,
    title: "Expert Consultations",
    description:
      "Consult with our audiologists to understand your hearing needs and options.",
    image: consultationImg,
  },
  {
    id: 4,
    title: "Repairs & Maintenance",
    description:
      "Quick and professional service to keep your hearing aids performing at their best.",
    image: repairImg,
  },
];

const OurServices = () => {
  return (
    <section className="bg-gradient-to-l from-white via-sky-200 to-sky-300 py-16 md:py-24" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Our Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our range of services designed to improve your hearing and enhance your life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 duration-300 p-4 flex flex-col items-center text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-md mb-4 sm:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
