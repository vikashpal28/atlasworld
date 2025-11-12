import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppLayout } from "./Components/AppLayout";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
       path: "country/:id",
       element : <CountryDetails/>
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
