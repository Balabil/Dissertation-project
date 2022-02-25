import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Register from './pages/Register'
import Main from './pages/Main'
import Navbar from './components/Navbar/Navbar.js'

const App = () => {
    return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register  />} />
                <Route path="/courses" element={<><Navbar/><Courses/></>} />
                <Route path="/main" element={<><Navbar/><Main/></>}/>
            </Routes>
            
        </BrowserRouter>

    </div>
    )
}

export default App
