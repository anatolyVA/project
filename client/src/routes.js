import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/Home/HomePage";
import MapPage from "./pages/Map/mapPage";
import ProfilePage from "./pages/Profile/profilePage";
import DescriptionPage from "./pages/Description/DescriptionPage";
import {
  LOGIN_ROUTE,
  HOMEPAGE_ROUTE,
  MAPPAGE_ROUTE,
  PROFILE_ROUTE,
  REGISTATION_ROUTE,
  DESCRPPAGE_ROUTE,
} from "./utils/const";

export const authRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: ProfilePage,
  },
];

export const publicRoutes = [
  {
    path: HOMEPAGE_ROUTE,
    Component: HomePage,
  },
  {
    path: REGISTATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: MAPPAGE_ROUTE,
    Component: MapPage,
  },
  {
    path: DESCRPPAGE_ROUTE + '/:id',
    Component: DescriptionPage,
  },
];
