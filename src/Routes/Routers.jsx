import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBord from "../Layout/DashBord";
import Employee from "../Pages/DashBord/Employee/Employee";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<h><span className="mx-150  text-2xl ">page not found</span></h>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>
        }
    ]
  },
  {
    path:'dashbord',
    element:<DashBord></DashBord>,
    children:[
      {
        path:'employee',
        element:<Employee></Employee>
      }
    ]
  }
]);