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

import LayoutAdmin from './components/layouts/LayoutAdmin'
import Properties from './pages/pagesAdmin/Properties'
import { DetailProperties } from './pages/pagesAdmin/DetailProperties'
import ListMessages from './pages/pagesAdmin/ListMessages'
import Users from './pages/pagesAdmin/Users'

import LayoutAI from './components/layouts/LayoutAI'
import HomeAI from './pages/pagesAI/HomeAI'
import SignIn from './components/SignIn'
import IA from './pages/pagesWeb/IA'

// contexts
import { UserProvider } from './context/UserProvider'
//loaders
import { loader as loaderProperty } from './pages/pagesAdmin/DetailProperties'

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
          element: <IA />,
          path: '/ia'
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
        {
          element: <SignIn />,
          path: '/signin'
        },
      ]
    },
    {
      path: '/admin',
      element: <LayoutAdmin />,
      children: [
        {
          index: true,
          element: <Properties />,
          path: 'propiedades'
        },
        {
          element: <DetailProperties />,
          path: 'propiedades/detail/:idProperty',
          loader: loaderProperty 
        },
        {
          element: <Users />,
          path: 'usuarios'
        },
        {
          element: <ListMessages />,
          path: 'mensajes'
        },
        // {
        //   element: <Users />,
        //   path: 'buscar'
        // },
        // {
        //   element: <Contact />,
        //   path: 'contacto'
        // },
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
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

