import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Teste</div>} />
      <Route path="/error" element={<div>Error 404</div>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};
