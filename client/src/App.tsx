import { useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate, RouteObject } from "react-router-dom"

import { checkAuth } from './redux/authActions';

import HeaderPrivate from "./components/headerPrivate/headerPrivate"
import HeaderPublic from "./components/headerPublic/headerPublic"
import Footer from "./components/footer/footer"

import Home from "./pages/Public/Home/HomePage"
import Login from "./pages/Public/Login/LoginPage"
import Profile from "./pages/Private/Profile/ProfilePage"
import Cards from "./pages/Private/Cards/CardsPage"

function App() {
  const [isAppReady, setIsAppReady] = useState(false)

  const dispatch = useDispatch();
  useEffect( ()=>{
    (dispatch as any)(checkAuth())
    setIsAppReady(true)
  },[])

  const isAuth = useSelector((state: any) => state.auth.isAuth);

  const routes = (isAuth: boolean): RouteObject[] => {
    return isAuth ? [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/cards',
        element: <Cards />
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ] : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ];
  }
  
  const router = createBrowserRouter(routes(isAuth))

  return (
    isAppReady ? 
      <div id="wrap">
        {isAuth ? <HeaderPrivate/>:<HeaderPublic/>}
        <div className='body'><RouterProvider router={router} /></div>
          
        <Footer/>
      </div>
      :<div>Загрузка</div> 
  )

}

export default App
