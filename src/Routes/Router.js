import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Blog from '../Blog/Blog';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import OurRooms from '../OurRooms/OurRooms';
import Login from '../Sign/Login';
import SignUp from '../Sign/SignUp';
import PrivateRoute from './PrivateRoute.js/PrivateRoute';


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
            <Blog></Blog>
          </>
        },
        {
          path:'/blog',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
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