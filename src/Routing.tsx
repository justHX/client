import { FC, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { SecurePage } from "./components";

import AdminPage from "./pages/persons/AdminPage";
import ImpoverishedPage from "./pages/persons/ImpoverishedPage";
import VolonteerPage from "./pages/persons/VolonteerPage";
import Auth from "./pages/auth/Auth";
import Welcome from "./pages/Welcome";

import { ROUTES } from "./constants/Routes";

import { useUser } from "./stores";

function generateSecurePage(isAuth: boolean, redirectUrl: string): FC<any> {
  return ({ children }) => (
    <SecurePage isAuth={isAuth} redirect={redirectUrl}>
      {children}
    </SecurePage>
  );
}

const Routing = () => {
  const { user } = useUser();

  const ProtectedPage = useMemo(
    () => generateSecurePage(user.isAuth, ROUTES.LOGIN_ROUTE),
    [user.isAuth]
  );

  return (
    <Routes>
      <Route
        path={ROUTES.ADMIN_ROUTE}
        element={
          <ProtectedPage>
            <AdminPage />
          </ProtectedPage>
        }
      />
      <Route path={ROUTES.VOLONTEER_ROUTE} element={<VolonteerPage />} />
      <Route path={ROUTES.IMPROVERISHED_ROUTE} element={<ImpoverishedPage />} />
      <Route path={ROUTES.LOGIN_ROUTE} element={<Auth />} />
      <Route path={ROUTES.REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ROUTES.WELCOME_ROUTE} element={<Welcome />} />
    </Routes>
  );
};

export default Routing;
