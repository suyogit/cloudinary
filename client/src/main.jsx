import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Unauthenticated from "./components/Unauthenticated.jsx";
import Secure from "./components/Secure.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/unauthorized",
        element: <Unauthenticated />,
      },
      {
        path: "/secure",
        element: <Secure />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
