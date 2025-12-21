import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import FreeTrial from "./components/FreeTrial.jsx";
import OurServices from "./components/OurServices.jsx";
import Footer from "./components/Footer.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <AboutSection />
              <ShopByCategory />
              <FreeTrial />
              <OurServices />
              <Footer />
            </>
          }
        />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
