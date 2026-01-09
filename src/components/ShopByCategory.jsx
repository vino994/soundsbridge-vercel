import { useRef, useState } from "react";
import { products } from "../data/products";
import ProductModal from "./ProductModal";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ShopByCategory = () => {
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += direction === "left" ? -300 : 300;
  };

  return (
    <section
      id="hearing-loss"
      className="bg-gradient-to-l from-white via-sky-200 to-sky-300 py-16 md:py-24"
      aria-labelledby="hearing-aid-categories"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* SEO HEADER */}
        <div className="text-center mb-12 md:mb-14">
          <h2
            id="hearing-aid-categories"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
          >
            Hearing Aid Categories for Every Hearing Need
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg mb-6">
            Explore a wide range of digital hearing aids designed for different
            levels of hearing loss. Choose the right hearing solution based on
            comfort, lifestyle, and clarity — all backed by expert consultation
            and free trial options.
          </p>

          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll hearing aid categories left"
            className="absolute -top-14 left-0 bg-white text-blue-700 p-3 rounded-full shadow-xl hover:bg-blue-700 hover:text-white transition z-10"
          >
            <HiChevronLeft size={28} />
          </button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-2"
          >
            {products.map((product) => (
              <article
                key={product.id}
                className="flex-shrink-0 w-[250px] sm:w-[260px] md:w-[280px] bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 rounded-tr-[50px] rounded-bl-[50px] flex flex-col p-4"
              >
                <div className="bg-gray-100 rounded h-40 flex justify-center items-center mb-4">
                  <img
                    src={product.image}
                    alt={`${product.title} digital hearing aid category`}
                    loading="lazy"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  {product.description}
                </p>

                <p className="font-bold text-blue-700 mb-4">
                  {product.price}
                </p>

                {/* CTA */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`View details of ${product.title}`}
                  className="self-start bg-blue-700 text-white py-2 px-5 rounded-md hover:bg-blue-800 transition text-sm"
                >
                  View Details
                </button>
              </article>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll hearing aid categories right"
            className="absolute -bottom-14 right-0 bg-white text-blue-700 p-3 rounded-full shadow-xl hover:bg-blue-700 hover:text-white transition z-10"
          >
            <HiChevronRight size={28} />
          </button>
        </div>

        {/* INTERNAL LINK CTA */}
        <div className="text-center mt-16">
          <a
            href="#about-us"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
            aria-label="Book free hearing aid consultation"
          >
           Get Free Consultation
          </a>
        </div>
      </div>

      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ShopByCategory;
