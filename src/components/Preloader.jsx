import logo from "../assets/logo.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-900 text-center">
      <img
        src={logo}
        alt="SoundsBridge Hearing Care Logo"
        className="h-20 w-20 mb-6 animate-pulse"
      />

      <h1
        className="text-2xl md:text-3xl font-bold tracking-widest
          bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500
          bg-clip-text text-transparent mb-3"
        style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
      >
        SOUNDSBRIDGE
      </h1>

      <p className="text-gray-300 text-sm md:text-base animate-fadeIn">
        Trusted Hearing Aid Specialists in Kerala
      </p>
    </div>
  );
};

export default Preloader;
