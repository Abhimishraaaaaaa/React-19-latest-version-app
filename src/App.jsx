import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import "./App.css";
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails";
import { ErrorPage } from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  }

]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App