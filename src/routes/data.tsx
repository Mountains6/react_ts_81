import type { RouteObj } from "./types";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Users from "../pages/Users/Users";
import User from "../pages/Users/components/User/User";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Lesson07 from "../lessons/Lesson07/Lesson07";
import Lesson08 from "../lessons/Lesson08/Lesson08";
import Lesson09 from "../lessons/Lesson09/Lesson09";
import Lesson10 from "../lessons/Lesson10/Lesson10";
import Lesson11 from "../lessons/Lesson11/Lesson11";
import Lesson15 from "../lessons/Lesson15/Lesson15";

export const routesData: RouteObj[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/users", element: <Users /> },
  { path: "/users/user", element: <User /> },
  { path: "/lesson07", element: <Lesson07 /> },
  { path: "lesson08", element: <Lesson08 /> },
  { path: "lesson09", element: <Lesson09 /> },
  { path: "lesson10", element: <Lesson10 /> },
  { path: "lesson11", element: <Lesson11 /> },
  { path: "lesson15", element: <Lesson15 /> },

  { path: "*", element: <PageNotFound /> },
];
