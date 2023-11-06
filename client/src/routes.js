import AuthPage from "./pages/authPage";
import mainPage from "./pages/mainPage";
import MapPage from "./pages/mapPage";
import profilePage from "./pages/profilePage";
import { LOGIN_ROUTE, MAINPAGE_ROUTE, MAPPAGE_ROUTE, PROFILE_ROUTE, REGISTATION_ROUTE } from "./utils/const";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: profilePage
    },
]

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        Component: mainPage
    },
    {
        path: REGISTATION_ROUTE,
        Component: AuthPage
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: MAPPAGE_ROUTE,
        Component: MapPage
    },
]