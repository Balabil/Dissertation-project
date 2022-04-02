import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Register from './pages/Register'
import Main from './pages/Main'
import Navbar from './components/Navbar/Navbar.js'
import Navbar2 from './components/Navbar/Navbar2.js'
import Course1 from './pages/Course1.js'
import Lesson1 from './pages/Lesson1.js'
import Lesson12 from './pages/Lesson1-1.js'
import Lesson13 from './pages/Lesson1-2.js'
import Lesson14 from './pages/Lesson1-3.js'
import Lesson15 from './pages/Lesson1-4.js'
import Quiz1 from './pages/Quiz1.js'
import Quiz12 from './pages/Quiz1-1.js'
import Quiz13 from './pages/Quiz1-2.js'
import Quiz14 from './pages/Quiz1-3.js'
import Quiz15 from './pages/Quiz1-4.js'
import Quiz16 from './pages/Quiz1-5.js'
import Quiz17 from './pages/Quiz1-6.js'
import Quiz18 from './pages/Quiz1-7.js'
import Quiz19 from './pages/Quiz1-8.js'
import Quiz20 from './pages/Quiz1-9.js'
import Quiz2 from './pages/Quiz2.js'
import Quiz22 from './pages/Quiz2-1.js'
import Quiz23 from './pages/Quiz2-2.js'
import Quiz24 from './pages/Quiz2-3.js'
import Quiz25 from './pages/Quiz2-4.js'
import Quiz26 from './pages/Quiz2-5.js'
import Quiz27 from './pages/Quiz2-6.js'
import Quiz28 from './pages/Quiz2-7.js'
import Quiz29 from './pages/Quiz2-8.js'
import Quiz30 from './pages/Quiz2-9.js'

const App = () => {
    return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register  />} />
                <Route path="/courses" element={<><Navbar/><Courses/></>} />
                <Route path="/courses2" element={<><Navbar2/><Courses/></>} />
                <Route path="/main" element={<><Navbar/><Main/></>}/>
                <Route path="/main2" element={<><Navbar2/><Main/></>}/>
                <Route path="/course1" element={<><Navbar2/><Course1/></>}/>
                <Route path="/lesson1" element={<><Navbar2/><Lesson1/></>}/>
                <Route path="/lesson1-1" element={<><Navbar2/><Lesson12/></>}/>
                <Route path="/lesson1-2" element={<><Navbar2/><Lesson13/></>}/>
                <Route path="/lesson1-3" element={<><Navbar2/><Lesson14/></>}/>
                <Route path="/lesson1-4" element={<><Navbar2/><Lesson15/></>}/>
                <Route path="/quiz1" element={<><Navbar2/><Quiz1/></>}/>
                <Route path="/quiz1-1" element={<><Navbar2/><Quiz12/></>}/>
                <Route path="/quiz1-2" element={<><Navbar2/><Quiz13/></>}/>
                <Route path="/quiz1-3" element={<><Navbar2/><Quiz14/></>}/>
                <Route path="/quiz1-4" element={<><Navbar2/><Quiz15/></>}/>
                <Route path="/quiz1-5" element={<><Navbar2/><Quiz16/></>}/>
                <Route path="/quiz1-6" element={<><Navbar2/><Quiz17/></>}/>
                <Route path="/quiz1-7" element={<><Navbar2/><Quiz18/></>}/>
                <Route path="/quiz1-8" element={<><Navbar2/><Quiz19/></>}/>
                <Route path="/quiz1-9" element={<><Navbar2/><Quiz20/></>}/>
                <Route path="/quiz2" element={<><Navbar2/><Quiz2/></>}/>
                <Route path="/quiz2-1" element={<><Navbar2/><Quiz22/></>}/>
                <Route path="/quiz2-2" element={<><Navbar2/><Quiz23/></>}/>
                <Route path="/quiz2-3" element={<><Navbar2/><Quiz24/></>}/>
                <Route path="/quiz2-4" element={<><Navbar2/><Quiz25/></>}/>
                <Route path="/quiz2-5" element={<><Navbar2/><Quiz26/></>}/>
                <Route path="/quiz2-6" element={<><Navbar2/><Quiz27/></>}/>
                <Route path="/quiz2-7" element={<><Navbar2/><Quiz28/></>}/>
                <Route path="/quiz2-8" element={<><Navbar2/><Quiz29/></>}/>
                <Route path="/quiz2-9" element={<><Navbar2/><Quiz30/></>}/>
            </Routes>
            
        </BrowserRouter>

    </div>
    )
}

export default App
