import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SecurePage } from "components";
import VolonteerPage from "pages/persons/VolonteerPage";
import Auth from "pages/auth/Auth";
import Welcome from "pages/Welcome";

import { ROUTES } from "const/Routes";

import { UserRole, useUser } from "stores";
import UsersAdmin from "./pages/admin/UsersAdmin";
import VolonteerAdmin from "./pages/admin/VolonteerAdmin";
import FeedbackAdmin from "./pages/admin/FeedbackAdmin";
import TelegramAdmin from "./pages/admin/TelegramAdmin";
import SettingsAdmins from "./pages/admin/SettingsAdmins";
import ClaimUser from "./pages/impoverished/ClaimUser";
import EditUser from "./pages/impoverished/EditUser";
import StoryUser from "./pages/impoverished/StoryUser";

interface ProtectedPageProps {
  role: UserRole;
  children: JSX.Element;
}

const ProtectedPage: FC<ProtectedPageProps> = ({ children, role }) => {
  const { user } = useUser();

  const isAuth = user.isAuth && user.role === role;

  return (
    <SecurePage isAuth={isAuth} redirect={ROUTES.LOGIN_ROUTE}>
      {children}
    </SecurePage>
  );
};

const Routing: FC = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.ADMIN_ROUTE}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <Navigate to={ROUTES.ADMIN_ROUTE_USER} />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.ADMIN_ROUTE_USER}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <UsersAdmin />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.ADMIN_ROUTE_VOLONTEER}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <VolonteerAdmin />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.ADMIN_ROUTE_FEEDBACK}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <FeedbackAdmin />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.ADMIN_ROUTE_TELEGRAMM}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <TelegramAdmin />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.ADMIN_ROUTE_SETTINGS}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <SettingsAdmins />
          </ProtectedPage>
        }
      />
      <Route
        path={ROUTES.IMPROVERISHED_ROUTE}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <Navigate to={ROUTES.IMPROVERISHED_ROUTE_CLAIM} />
          </ProtectedPage>
        }
      />

      <Route
        path={ROUTES.IMPROVERISHED_ROUTE_CLAIM}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <ClaimUser />
          </ProtectedPage>
        }
      />

      <Route
        path={ROUTES.IMPROVERISHED_ROUTE_EDIT}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <EditUser />
          </ProtectedPage>
        }
      />

      <Route
        path={ROUTES.IMPROVERISHED_ROUTE_STORY}
        element={
          <ProtectedPage role={UserRole.ADMIN}>
            <StoryUser />
          </ProtectedPage>
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
