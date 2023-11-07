import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ProfilePage from "./pages/ProfilePage";
import { LOGIN_ROUTE, HOMEPAGE_ROUTE, MAPPAGE_ROUTE, PROFILE_ROUTE, REGISTATION_ROUTE } from "./utils/const";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
]

export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
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