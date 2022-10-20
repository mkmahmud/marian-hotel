
import './App.css';
import Navbar from './Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from './Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<></>
    },
    {
      path:'/about',
      element:<div>About</div>
    }
  ])
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider> 
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
