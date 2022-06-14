import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { SecurePage } from "components";

import AdminPage from "pages/persons/AdminPage";
import ImpoverishedPage from "pages/persons/ImpoverishedPage";
import VolonteerPage from "pages/persons/VolonteerPage";
import Auth from "pages/auth/Auth";
import Welcome from "pages/Welcome";

import { ROUTES } from "const/Routes";

import { useUser, UserRole } from "stores";

const Routing: FC = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route
        path={ROUTES.ADMIN_ROUTE}
        element={
          <SecurePage
            isAuth={user.isAuth && user.role === UserRole.ADMIN}
            redirect={ROUTES.LOGIN_ROUTE}
          >
            <AdminPage />
          </SecurePage>
        }
      />
      <Route
        path={ROUTES.IMPROVERISHED_ROUTE}
        element={
          <SecurePage
            isAuth={user.isAuth && user.role === UserRole.USER}
            redirect={ROUTES.LOGIN_ROUTE}
          >
            <ImpoverishedPage />
          </SecurePage>
        }
      />

      <Route path={ROUTES.VOLONTEER_ROUTE} element={<VolonteerPage />} />
      <Route path={ROUTES.LOGIN_ROUTE} element={<Auth />} />
      <Route path={ROUTES.REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ROUTES.WELCOME_ROUTE} element={<Welcome />} />
    </Routes>
  );
};

export default Routing;
