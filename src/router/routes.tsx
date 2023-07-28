import { Routes } from "../constants/routes"
import AuthPage from "../pages/AuthPage"
import MainPage from "../pages/MainPage"
import NotFoundPage from "../pages/NotFoundPage"

export const routes = [
  {
    path: Routes.SIGNIN,
    exact: true,
    element: <AuthPage />,
  },
  {
    path: Routes.HOME,
    exact: true,
    element: <MainPage />,
  },
  {
    path: Routes.NOT_FOUND,
    exact: true,
    element: <NotFoundPage />,
  },
]
