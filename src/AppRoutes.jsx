import React from 'react'
import  Home  from './pages/home'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Feed from './pages/feed'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feed' element={<Feed/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

