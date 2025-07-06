import React from 'react'
import './App.css'
import AppHeader from './components/header'  
import AppSideMenu from './components/sideMenu' 
import { Space } from 'antd'
import { Outlet } from 'react-router-dom'

function App() { 

  return (
   <div className="min-h-screen flex flex-col w-full justify-between items-center">
      <AppHeader /> 
      <div className='w-full flex'>
        <AppSideMenu /> 
        <Outlet />
      </div> 
    </div>
  )
}

export default App
