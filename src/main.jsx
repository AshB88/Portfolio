import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
//import './index.css'
import ErrorPage from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render( 
    <RouterProvider router={router} />
);
