import { useState, useEffect } from "react";
import api from "../utils/api";

const ConsultationFlow = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hearingIssue: "",
    preferredDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔑 LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "auto";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
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
        onClose(); // 🔑 triggers cleanup
      }, 2500);
    } catch {
      alert("❌ Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold"
        >
          ×
        </button>

        {/* SUCCESS */}
        {success ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              ✅ Submitted Successfully
            </h2>
            <p>Our team will contact you shortly.</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  Quick Qualification
                </h2>

                <select
                  name="hearingIssue"
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  required
                >
                  <option value="">Do you experience hearing loss?</option>
                  <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe">Severe</option>
                </select>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-700 text-white py-2 rounded"
                >
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">
                  Book Consultation
                </h2>

                <form onSubmit={submitForm} className="space-y-3">
                  <input
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    name="preferredDate"
                    type="date"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                  <textarea
                    name="notes"
                    placeholder="Additional notes"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />

                  <button
                    disabled={loading}
                    className="w-full bg-green-600 text-white py-2 rounded"
                  >
                    {loading ? "Submitting..." : "Submit"}
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
