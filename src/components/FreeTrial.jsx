import { useState } from "react";
import img1 from "../assets/her-image-1.webp";
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

      setSuccess("✅ Free trial booked successfully!");
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
    <section className="relative w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-gradient-to-l from-white via-sky to-sky-300 py-24" id="about-us">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR FREE TRIAL
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* TRIAL CARD */}
        <div className="max-w-6xl h-[500px] sm:h-[450px] mx-auto bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-8 rounded-xl shadow-lg relative overflow-hidden">
          <img
            src={img1}
            alt="Free Trial"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col items-center justify-center p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Free Trial Today!
            </h3>
            <p className="mb-6 max-w-2xl">
              Experience our hearing aids with a 30-day free trial.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full font-semibold"
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Book Free Trial
            </h2>

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
                className="w-full border p-2 rounded"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <input
                name="preferredDate"
                type="date"
                value={form.preferredDate}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <textarea
                name="notes"
                placeholder="Notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <button
                disabled={loading}
                className="w-full bg-blue-700 text-white py-2 rounded disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeTrial;
