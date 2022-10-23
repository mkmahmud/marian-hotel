import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Navbar from '../Navbar/Navbar';
import OurRooms from '../OurRooms/OurRooms';
import Login from '../Sign/Login';
import SignUp from '../Sign/SignUp';


const Router = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <>
            <Home></Home>
            <OurRooms></OurRooms>
          </>
        },
        {
          path: '/about',
          element: <div>About</div>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    }
    
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default Router;