import App from "./App";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routes;
