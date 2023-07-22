import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Home/Home/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Login from "../Layouts/Login";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"colleges",
            element:<Colleges></Colleges>
        },
        {
            path:"admission",
            element:<Admission></Admission>
        },
        {
            path:"mycollege",
            element:<MyCollege></MyCollege>
        },

      ]
    },
    {
        path:"login",
        element:<Login></Login>
    }
  ]);