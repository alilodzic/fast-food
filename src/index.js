import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./utils/sass/style.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/about/About';
import Home from './pages/home/Home';
import Conatct from './pages/contact/Conatct';
import Singlepost from './component/single-post/Singlepost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children : [
      { index: true, element: <Home /> },
      {
        path: "contact",
        element : <Conatct />
      },
      {
        path: "about",
        element : <About/>
      },
      {
        path: "post/:id",
        element : <Singlepost/>
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


