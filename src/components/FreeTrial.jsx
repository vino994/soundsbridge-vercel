import { useState } from "react";
import img1 from "../assets/hero-image-3.webp";
import api from "../utils/api";

const FreeTrial = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/leads", form);

      setSuccess("✅ Your free hearing aid trial has been booked!");
      setForm({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        notes: "",
      });

      setTimeout(() => {
        setShowForm(false);
        setSuccess("");
      }, 2000);
    } catch (err) {
      alert("❌ Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="about-us"
      className="relative w-full py-24 px-6 bg-gradient-to-l from-white via-sky to-sky-300 overflow-hidden"
    >
      <div className="container mx-auto">

        {/* SEO HEADER */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: '"Sirin Stencil", sans-serif' }}
          >
            Free Hearing Aid Trial in Kerala
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience advanced digital hearing aids with a no-risk free trial.
            Get expert consultation and personalized recommendations from
            SoundsBridge hearing specialists.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded mt-6"></div>
        </div>

        {/* HERO CARD */}
        <div className="relative max-w-6xl mx-auto h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={img1}
            alt="Free hearing aid trial consultation"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Book a Free Hearing Aid Trial – No Obligation
            </h3>
            <p className="max-w-2xl mb-6 text-gray-200">
              Try premium hearing aids at home and discover clearer sound,
              comfort, and confidence before you decide.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-full font-semibold transition"
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* GLASSMORPHISM FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-w-md w-full rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 text-gray-900">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black cursor-pointer"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-center mb-2">
              Book Your Free Trial
            </h3>
            <p className="text-sm text-center text-white mb-4">
              Fill in your details and our hearing expert will contact you.
            </p>

            {success && (
              <p className="text-green-600 text-center mb-3">{success}</p>
            )}

            <form onSubmit={submit} className="space-y-3">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="notes"
                placeholder="Any hearing concerns or notes (optional)"
                value={form.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold transition disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeTrial;
