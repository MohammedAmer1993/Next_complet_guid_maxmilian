import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./routes/HomeLayout";
import Home from "./routes/Home";
import Create from "./routes/Create";
import { postsLoader } from "./routes/Home";
import { postAction } from "./routes/Create";
import PostDetails from "./routes/PostDetails";
import { postDetailsLoader } from "./routes/PostDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
        loader: postsLoader,
        shouldRevalidate: () => true,
        children: [
          { path: "/create", element: <Create />, action: postAction },
          { path: ":id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
