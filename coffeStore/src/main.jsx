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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/addCofee',
        element: <AddCoffe></AddCoffe>
      },
      {
        path: '/updateCoffe',
        element: <UpdateCoffe></UpdateCoffe>
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
