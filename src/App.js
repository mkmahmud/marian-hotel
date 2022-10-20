
import './App.css';
import Navbar from './Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

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
    </div>
  );
}

export default App;
