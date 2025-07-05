import React from 'react'
import './App.css'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import AppSideMenu from './components/sideMenu'
import AppContent from './components/content'
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
      <AppFooter />
    </div>
  )
}

export default App
