import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import Header from "./components/Header";
import theme from "./theme";
import Loading from "./components/Loading";
import RootContextProvider from "./context/RootContext";

const App = () => {
  return (
    <RootContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.key}
                  element={<route.element />}
                  path={route.path}
                />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </RootContextProvider>
  );
};
export default App;
