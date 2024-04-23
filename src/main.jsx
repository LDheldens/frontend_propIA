import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Layout from './components/Layout'
import SearchProp from './pages/SearchProp'
import Advisors from './pages/Advisors'
import Contact from './pages/Contact'
import Item from './components/Item'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          path: '/'
        },
        {
          element: <SearchProp />,
          path: '/buscar'
        },
        {
          element: <Advisors />,
          path: '/asesores'
        },
        {
          element: <Contact />,
          path: '/contacto'
        },
        {
          element: <Item />,
          path: '/item'
        },
        // {
        //   element: <LogIn />,
        //   path: '/login'
        // },

        // {
        //   element: <Oficces />,
        //   path: '/oficinas'
        // },
      ]
    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

