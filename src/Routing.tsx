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
import UsersAdmin from "./pages/admin/UsersAdmin";
import VolonteerAdmin from "./pages/admin/VolonteerAdmin";
import FeedbackAdmin from "./pages/admin/FeedbackAdmin";
import TelegramAdmin from "./pages/admin/TelegramAdmin";
import SettingsAdmins from "./pages/admin/SettingsAdmins";

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
            path={ROUTES.ADMIN_ROUTE_USER}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <UsersAdmin />
                </SecurePage>
            }
        />
        <Route
            path={ROUTES.ADMIN_ROUTE_VOLONTEER}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <VolonteerAdmin />
                </SecurePage>
            }
        />
        <Route
            path={ROUTES.ADMIN_ROUTE_FEEDBACK}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <FeedbackAdmin />
                </SecurePage>
            }
        />
        <Route
            path={ROUTES.ADMIN_ROUTE_TELEGRAMM}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <TelegramAdmin />
                </SecurePage>
            }
        />
        <Route
            path={ROUTES.ADMIN_ROUTE_SETTINGS}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <SettingsAdmins />
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
