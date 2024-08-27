import React from 'react'
import { Outlet } from "react-router-dom"
import Login from './Components/login/Login'
import Header from './Components/header/Header'
function RootLayout() {
  return (
    <div>
          <Header></Header>
         <div style={{minHeight:'90vh'}}> <Outlet/></div>
    </div>
  )
}

export default RootLayout