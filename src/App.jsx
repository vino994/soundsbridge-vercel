import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./components/HomePage.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import FreeTrial from "./components/FreeTrial.jsx";
import OurServices from "./components/OurServices.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function PublicLayout() {
  return (
    <>
      <HomePage />
      <AboutSection />
      <ShopByCategory />
      <FreeTrial />
      <OurServices />
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PublicLayout />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
