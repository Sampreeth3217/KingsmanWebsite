import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Components/login/Login'
import Region from './Components/region/Region'
import Home from './Components/home/Home'
import RootLayout from './RootLayout'
import RoutingError from './RoutingError'
import About from './Components/aboutus/About'
function App({children}) {
  const browserRouter = createBrowserRouter([
      {
        path:'',
        element: <RootLayout />,
        errorElement: <RoutingError />,
        children:[
          {
            path:'',
            element:<Home></Home>
          },
          {
            path:'/region',
            element:<Region/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/about',
            element:<About/>
          },
        ]
      }
  ])
  return (
    <RouterProvider router={browserRouter}>{children}</RouterProvider>
  )
}
export default App
