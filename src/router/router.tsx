import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import {TodoMy } from "~/pages";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/todomy" />,
      },
      {
        path: "/todomy",
        element: <TodoMy />,
      },
    ],
  },
]);

export { router };
