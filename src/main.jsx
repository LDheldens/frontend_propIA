import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Layout from './components/Layout'
import SearchProp from './pages/SearchProp'
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
        // {
        //   element: <Advisors />,
        //   path: '/asesores'
        // },
        // {
        //   element: <Item />,
        //   path: '/item'
        // },
        // {
        //   element: <ImageModal />,
        //   path: '/item'
        // },
        // {
        //   element: <LogIn />,
        //   path: '/login'
        // },
        // {
        //   element: <Chatbot />,
        //   path: '/chat'
        // },
        // {
        //   element: <Contact />,
        //   path: '/contacto'
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

