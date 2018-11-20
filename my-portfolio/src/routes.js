import React from "react";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home!!!!!</h2>,
  },
  {
    path: "/About",
    main: () => <h2>About</h2>,
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
