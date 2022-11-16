import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
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
