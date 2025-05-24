import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import AddCoffe from './Components/AddCoffe.jsx';
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import Error from './Components/Error.jsx';
import Home from './Components/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    loader: ()=>fetch('http://localhost:5000/coffe')
  },
  
  {
    path:'/addCofee',
    element: <AddCoffe></AddCoffe>
  },
  {
    path: '/updateCoffe/:id',
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({params})=>fetch(`http://localhost:5000/coffe/${params.id}`)
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
