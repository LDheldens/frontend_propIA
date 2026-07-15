import Home from '../features/home/pages/Home'
import MainLayout from '../components/layout/MainLayout'
import SearchProp from '../features/properties/pages/SearchProp'
import Advisors from '../features/home/pages/Advisors'
import Contact from '../features/home/pages/Contact'
import DetailProps from '../features/properties/pages/DetailProps'
import LogIn from '../features/auth/pages/LogIn'
import UserLayout from '../components/layout/UserLayout'
import Post from '../features/user/pages/Post'
import UserActivity from '../features/user/pages/UserActivity'
import { UserAccount } from '../features/user/pages/UserAccount'
import AdminLayout from '../components/layout/AdminLayout'
import Properties from '../features/admin/pages/Properties'
import { DetailProperties } from '../features/admin/pages/DetailProperties'
import ListMessages from '../features/admin/pages/ListMessages'
import Users from '../features/admin/pages/Users'
import AILayout from '../components/layout/AILayout'
import HomeAI from '../features/ai/pages/HomeAI'
import SignIn from '../features/auth/pages/SignIn'
import IA from '../features/ai/pages/IA'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { loader as loaderProperty } from '../features/admin/pages/DetailProperties'
import { loader as loaderProperty2 } from '../features/properties/pages/DetailProps'
import { Dashboard } from '../features/admin/pages/Dashboard'
import { searchPropLoader } from '../features/properties/pages/SearchProp'
import ProtectedRoutes from '../features/auth/components/ProtectedRoutes'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          path: '/'
        },
        {
          element: <SearchProp />,
          path: '/buscar',
          loader: searchPropLoader
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
          element: <DetailProps />,
          path: '/item/:idProperty',
          loader: loaderProperty2
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
          element: <ProtectedRoutes roles={[1]}><AdminLayout /></ProtectedRoutes>,
      children: [
        {
          index: true,
          element: <Dashboard />,
          path: 'dashboard'
        },
        {
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
        {
          path: "*",
          element: <Navigate to="dashboard" replace />
        }
      ]
    },
    {
      path: '/usuario',
          element: <ProtectedRoutes roles={[1,2]}><UserLayout/></ProtectedRoutes>,
      children: [
        {
          element: <UserAccount />,
          path: 'cuenta',
          index: true,
        },
        { 
          element: <Post />,
          path: 'publicar'
        },
        {
          element: <UserActivity />,
          path: 'actividad'
        },
        {
          path: "*",
          element: <Navigate to="/usuario/cuenta" replace />
        }
      ]
    },
    {
      path: '/ia',
      element: <AILayout />,
      children: [
        {
          index: true,
          element: <HomeAI />,
          path: 'inicioia'
        },
      ]
    },
  ]
)

export default router
