import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import OurRooms from '../OurRooms/OurRooms';


const Router = () => {

    const router = createBrowserRouter([
        {
          path:'/',
          element:<>
            <Navbar></Navbar>
            <Home></Home>
            <OurRooms></OurRooms>
          </>
        },
        {
          path:'/about',
          element:<div>About</div>
        }
      ])

    return (
      <RouterProvider router={router}></RouterProvider> 
    );
};

export default Router;