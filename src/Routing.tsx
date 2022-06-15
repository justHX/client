import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {SecurePage} from "components";
import VolonteerPage from "pages/persons/VolonteerPage";
import Auth from "pages/auth/Auth";
import Welcome from "pages/Welcome";

import {ROUTES} from "const/Routes";

import {UserRole, useUser} from "stores";
import UsersAdmin from "./pages/admin/UsersAdmin";
import VolonteerAdmin from "./pages/admin/VolonteerAdmin";
import FeedbackAdmin from "./pages/admin/FeedbackAdmin";
import TelegramAdmin from "./pages/admin/TelegramAdmin";
import SettingsAdmins from "./pages/admin/SettingsAdmins";
import ClaimUser from "./pages/impoverished/ClaimUser";
import EditUser from "./pages/impoverished/EditUser";
import StoryUser from "./pages/impoverished/StoryUser";

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
              <Navigate to={ROUTES.ADMIN_ROUTE_USER} />
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
              <Navigate to={ROUTES.IMPROVERISHED_ROUTE_CLAIM} />
          </SecurePage>
        }
      />

        <Route
            path={ROUTES.IMPROVERISHED_ROUTE_CLAIM}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <ClaimUser />
                </SecurePage>
            }
        />

        <Route
            path={ROUTES.IMPROVERISHED_ROUTE_EDIT}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <EditUser />
                </SecurePage>
            }
        />

        <Route
            path={ROUTES.IMPROVERISHED_ROUTE_STORY}
            element={
                <SecurePage
                    isAuth={user.isAuth && user.role === UserRole.ADMIN}
                    redirect={ROUTES.LOGIN_ROUTE}
                >
                    <StoryUser />
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
