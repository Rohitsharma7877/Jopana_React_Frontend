import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";

import DoctoreConsultationPage from "./Pages/DoctoreConsultationPage";
import BookingPage from "./Pages/BookingPage";
import RapidPage from "./Pages/RapidPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />

      <Route
        path="/services/doctor-consultation/:consultationType"
        element={<DoctoreConsultationPage />}
      />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/rapid" element={<RapidPage />} />
    </Routes>
  );
};

export default AppRouter;
