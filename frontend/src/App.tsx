import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
};

export default App;
