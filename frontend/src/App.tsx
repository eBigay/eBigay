import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import Header from "./components/layout/Header";
import theme from "./assets/theme/theme";
import Loading from "./components/Loading";
import { Suspense } from "react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              element={
                <Suspense fallback={<Loading />}>
                  <route.element />
                </Suspense>
              }
              path={route.path}
            >
              {route.nested && (
                <Route
                  path={route.nested.path}
                  element={<route.nested.element />}
                  key={route.nested.key}
                />
              )}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
