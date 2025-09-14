import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "../MainOutlet";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { path: "/", element: <App/> },
      { path: "/about", element: <>About Section</> },
    ],
  },
]);

export default router;
