import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home/Home.jsx'
import Movies from './movies/movies.jsx';
import DetailMovie from './movies/detailMovie/DetailMovie.jsx';
import PrincipalPage from './PrincipalPage/PrincipalPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <p>Not found</p>,
    children: [
      {
        path: "/",
        element: <PrincipalPage />,
      },
      {
        path: "/comedia",
        element: <Movies genero="comedia" key={"comedia"} />,
      },
      {
        path: "/independientes",
        element: <Movies genero="independientes" key={"independientes"} />,
        children: [
          {
            path: "independientes/:pelicula",
            element: <DetailMovie key={1} />
          }
        ]
      }
    ],

  },
  {
    path: ":genero/:pelicula",
    element: <DetailMovie key={2} />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
