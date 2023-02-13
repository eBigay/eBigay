import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Suspense } from "react";
import routes from "./routes";
import Header from "./components/layout/Header";
import theme from "./assets/theme/theme";
import Loading from "./components/Loading";
import ModalContextProvider from "./context/ModalContext";
import { AuthContextProvider } from "./context/AuthContext";
import BasicToastContainer from "./assets/styles/components/BasicToastContainer";
import PersistLogin from "./components/PersistLogin";

const App = () => {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Suspense fallback={<Loading pos="center" />}>
              <Routes>
                <Route element={<PersistLogin />}>
                  {routes.map((route) => (
                    <Route
                      key={route.key}
                      element={<route.element {...route.props} />}
                      path={route.path}
                    >
                      {route.nested &&
                        route.nested.map((nestedRoute) => (
                          <Route
                            key={nestedRoute.key}
                            element={<nestedRoute.element />}
                            path={nestedRoute.path}
                          />
                        ))}
                    </Route>
                  ))}
                </Route>
              </Routes>
              <BasicToastContainer />
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
};
export default App;
