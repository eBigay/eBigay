import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import Header from "./components/layout/Header";
import theme from "./assets/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
export default App;
