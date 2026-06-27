import {  useContext, useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/register' element={<PrivateRoute><Register /></PrivateRoute>} />
        <Route path='/login' element={<PrivateRoute><Login /></PrivateRoute>} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
