import React from "react";
import About from "./components/About";
import Home from "./components/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/About",
    main: () => <About />,
  },
  {
    path: "/Skills",
    main: () => <h2>Skills</h2>,
  },
  {
    path: "/Projects",
    main: () => <h2>Projects</h2>,
  },
  {
    path: "/Resume",
    main: () => <h2>Resume</h2>,
  },
];
