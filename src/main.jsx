import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/pagesWeb/Home'
import Layout from './components/layouts/Layout'
import SearchProp from './pages/pagesWeb/SearchProp'
import Advisors from './pages/pagesWeb/Advisors'
import Contact from './pages/pagesWeb/Contact'
import Item from './components/items/Item'
import LogIn from './components/LogIn'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LayoutSell from './components/layouts/LayoutSell'
import SellProp from './components/sellProps/SellProp'
import Post from './pages/pagesPost/Post'
import MyActivity from './pages/pagesPost/MyActivity'

import LayoutAI from './components/layouts/LayoutAI'
import HomeAI from './components/iaIntegrated/HomeAI'

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
        {
          element: <LogIn />,
          path: '/login'
        },
      ]
    },
    {
      path: '/publicar',
      element: <LayoutSell />,
      children: [
        {
          index: true,
          element: <Post />,
          path: 'formulario'
        },
        {
          element: <MyActivity />,
          path: 'actividad'
        },
        {
          element: <SellProp />,
          path: 'interesados'
        },
      ]
    },
    {
      path: '/ia',
      element: <LayoutAI />,
      children: [
        {
          index: true,
          element: <HomeAI />,
          path: 'inicioia'
        },
        // {
        //   element: <MyActivity />,
        //   path: 'actividad'
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

