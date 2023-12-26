import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  creatBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = creatBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
