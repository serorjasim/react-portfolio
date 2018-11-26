import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

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
    main: () => <Skills />,
  },
  {
    path: "/Projects",
    main: () => <h2>Projects</h2>,
  },
  {
    path: "/Resume",
    main: () => <a href="Resume.pdf" />,
  },
];
