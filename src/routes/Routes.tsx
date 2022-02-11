import { Navigate, Route, Routes } from "react-router-dom";
import Charts from "../pages/chart/Charts";
import CountryItem from "../pages/country/CountryItem";

import Home from "../pages/home/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/country/:name" element={<CountryItem />} />
      <Route path="/error" element={<div>Error 404</div>} />
      <Route path="*" element={<Navigate to="/error" />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
  );
};
