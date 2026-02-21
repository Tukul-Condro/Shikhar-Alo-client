import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBord from "../Layout/DashBord";
import Employee from "../Pages/DashBord/Employee/Employee";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import UpdateWork from "../Pages/DashBord/Employee/UpdateWork";
import PaymentHistory from "../Pages/DashBord/Employee/PaymentHistory";
import AllEmployee from "../Pages/DashBord/Admin/AllEmployee";
import PayRoll from "../Pages/DashBord/Admin/PayRoll";
import EmployeeList from "../Pages/DashBord/HR/EmployeeList";
import Progress from "../Pages/DashBord/HR/Progress";

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
    element:<PrivateRoute><DashBord></DashBord></PrivateRoute>,
    children:[
      // Admin related
      {
        path:'admin',
        element:<AllEmployee></AllEmployee>
      },
      {
        path:'payRoll',
        element:<PayRoll></PayRoll>
      },
      // HR related
      {
        path:'hr',
        element:<EmployeeList></EmployeeList>
      },
      {
        path:'progrss',
        element:<Progress></Progress>
      }
      ,

      // Employee related
      {
        path:'employee',
        element:<Employee></Employee>
      },
      {
        path:'updateWork',
        element:<UpdateWork></UpdateWork>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory></PaymentHistory>
      }
    ]
  }
]);