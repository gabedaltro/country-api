import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/contexts";
import { AppRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <div className="App">
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </div>
  );
};
