import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Pag1 from "./pages/Pag1";
import Pag2 from "./pages/Pag2";
import Pag3 from "./pages/Pag3";
import Pag4 from "./pages/Pag4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/metaverse",
    element: <Pag1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/challenges",
    element: <Pag2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/BlockChainIa",
    element: <Pag3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/BlockMetaverse",
    element: <Pag4 />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
