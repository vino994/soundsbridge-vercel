import { useState, useEffect } from "react";
import api from "../utils/api";

const ConsultationFlow = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hearingIssue: "",
    preferredDate: "",
    notes: "",
  });

  /* 🔒 LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await api.post("/leads", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate,
        notes: `
Hearing Issue: ${formData.hearingIssue}
Notes: ${formData.notes}
        `,
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch {
      alert("❌ Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* GLASS CARD */}
      <div className="relative max-w-md w-full rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 text-gray-900">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
        >
          ×
        </button>

        {/* SUCCESS STATE */}
        {success ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              ✅ Consultation Booked
            </h2>
            <p className="text-gray-700">
              Our hearing specialist will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Quick Hearing Check
                </h2>
                <p className="text-sm text-center text-gray-700 mb-4">
                  Help us understand your hearing needs
                </p>

                <select
                  name="hearingIssue"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                >
                  <option value="">Do you experience hearing loss?</option>
                  <option value="Mild">Mild hearing difficulty</option>
                  <option value="Moderate">Moderate hearing loss</option>
                  <option value="Severe">Severe hearing loss</option>
                </select>

                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.hearingIssue}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold transition disabled:opacity-50"
                >
                  Continue
                </button>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-2 text-center">
                  Book Free Consultation
                </h2>
                <p className="text-sm text-center text-gray-700 mb-4">
                  Enter your details and preferred consultation date
                </p>

                <form onSubmit={submitForm} className="space-y-3">
                  <input
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    name="preferredDate"
                    type="date"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <textarea
                    name="notes"
                    placeholder="Any additional hearing concerns (optional)"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Request"}
                  </button>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultationFlow;
