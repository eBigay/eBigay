import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.key}
            element={<route.element />}
            path={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
