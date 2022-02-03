import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Teste
          </Button>
        }
      />
      <Route path="/error" element={<div>Error 404</div>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};
