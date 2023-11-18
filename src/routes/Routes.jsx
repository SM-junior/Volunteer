import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import GoogleLogin from "../pages/Login/GoogleLogin";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/totalGallery')
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
        loader: () => fetch('http://localhost:3000/cart')
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/googleLogin',
    element: <GoogleLogin></GoogleLogin>
  },
  {
    path: '/singUp',
    element: <SignUp></SignUp>
  }
]);

export default router;