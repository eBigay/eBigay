import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Suspense } from "react";
import routes from "./routes";
import Header from "./components/layout/Header";
import theme from "./assets/theme/theme";
import Loading from "./components/Loading";
import RootContextProvider from "./context/RootContext";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <RootContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Suspense fallback={<Loading pos="center" />}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.key}
                    element={<route.element {...route.props} />}
                    path={route.path}
                  />
                ))}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </RootContextProvider>
    </AuthContextProvider>
  );
};
export default App;
