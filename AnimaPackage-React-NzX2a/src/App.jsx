import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Frame } from "./screens/Frame";
import { FrameScreen } from "./screens/FrameScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Frame />,
  },
  {
    path: "/frame-5",
    element: <Frame />,
  },
  {
    path: "/frame-1",
    element: <FrameScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
