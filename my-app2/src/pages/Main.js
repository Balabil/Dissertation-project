import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Main.css';
import jwt_decode from 'jwt-decode'

function App(){
    let navigate = useNavigate();
    async function populateMain() {
        const req = await fetch('http://localhost:1337/api/main', {
            headers: {
                'x-access-token':  localStorage.getItem('token'),
            }
        })

        const data = req.json()
        console.log(data)
    }
        useEffect(() => {
            const token = localStorage.getItem('token')
            if (token) {
                const user = jwt_decode(token)
                if(!user){
                    localStorage.removeItem('token')
                    navigate("/login")
                } else {
                    populateMain()
                }
            } else {
                navigate("/login")
            }
        }, [])
    
    

    return(
        <body>
        <div className='general-box'>
            <img src={require('./img/pog-edit.webp')}></img>
            <div className='box-text'>
                <h1>Interactive Learning for Raspberry Pi</h1>
                <br></br>
                <br></br>
                <h2 className='fig2'>Take learning into your own hands</h2>
                <br></br>
                <h3 className='fig3'>Starting something new doesn’t have to be intimidating. With interactive courses,<br></br> you can practice as you learn with hands-on exersizes and guided feedback.  </h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link className='boxButton' to='/Register'>Sign Up</Link>
            </div>
        </div>
        <div className='general-box2'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>HOW IT WORKS</h1>
            <div className='inner-box'>
                <img src={require('./img/temp.png')}></img>
                <h1>KNOW WHERE TO START</h1>
                <h2>Interactive courses break down the intimidating barrier to entry when learning a new technology. Video tutorials and in-browser coding challenges are organized by level, so you can jump in wherever you feel comfortable. </h2>
            </div>

            <div className='inner-box2'>
                <img src={require('./img/temp.png')}></img>
                <h1>PRACTICE AS YOU LEARN</h1>
                <h2>Submit your code during challenges to make sure you're on the right track. Pluralsight recognizes incorrect code and gives you feedback to help you work through the challenge and build skills with confidence.</h2>
            </div>

            <div className='inner-box3'>
                <img src={require('./img/temp.png')}></img>
                <h1>KNOW WHERE TO START</h1>
                <h2>Interactive courses break down the intimidating barrier to entry when learning a new technology. Video tutorials and in-browser coding challenges are organized by level, so you can jump in wherever you feel comfortable. </h2>
            </div>

        </div>

        <div className='general-box4'>
            <img src={require('./img/pog-edit.webp')}></img>
            <div className='box-text3'>
                <h1>Get Started With Interactive Courses Today</h1>
                <Link className='boxButton2' to='/Courses'>View Courses</Link>
            </div>
        </div>
        </body>
    )
}
export default App;