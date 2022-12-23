import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Blog from '../Blog/Blog';
import Content from '../Dashboard/Content/Content';
import Home from '../Home/Home';
import Dashboard from '../Layout/Dashboard';
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
          path:'/rooms',
          element:<OurRooms></OurRooms>
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
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element: <Content></Content>
        }
      ]
    }
    
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default Router;