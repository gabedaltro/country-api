import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/Routes";
import Menu from "./pages/menu/Menu";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu>
          <AppRoutes />
        </Menu>
      </BrowserRouter>
    </div>
  );
};
