import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import {TodoMy, TodoRtkQuery} from "~/pages";
import Form from "~/pages/Form/Form.tsx";


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
      {
        path: "/todomyquery",
        element: <TodoRtkQuery />,
      },
      {
        path: "/form",
        element: <Form/>,
      },

    ],
  },
]);

export { router };
