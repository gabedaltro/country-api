import { Navigate, Route, Routes } from "react-router-dom";
import CountryItem from "../pages/country/CountryItem";

import Home from "../pages/home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/:name" element={<CountryItem />} />
      <Route path="/error" element={<div>Error 404</div>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};
