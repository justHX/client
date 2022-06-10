import {
    ADMIN_ROUTE,
    IMPROVERISHED_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    VOLONTEER_ROUTE,
    WELCOME_ROUTE
} from "./utils/Consts";
import Auth from "./pages/auth/Auth";
import Welcome from "./pages/Welcome";
import AdminPage from "./pages/persons/AdminPage";
import VolonteerPage from "./pages/persons/VolonteerPage";
import ImpoverishedPage from "./pages/persons/ImpoverishedPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE, Component: AdminPage
    },
    {
        path: VOLONTEER_ROUTE, Component: VolonteerPage
    },
    {
        path: IMPROVERISHED_ROUTE, Component: ImpoverishedPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE, Component: Auth
    },
    {
        path:REGISTRATION_ROUTE, Component: Auth
    },
    {
        path: WELCOME_ROUTE, Component: Welcome
    }
]