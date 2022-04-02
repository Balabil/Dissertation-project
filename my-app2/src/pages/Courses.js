import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import './Courses.css'
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
                    navigate("/courses")
                } else {
                    populateMain()
                    navigate("/courses2")
                }
            } else {
                console.log()
                navigate("/courses")
            }
        }, [])
    return(
        <body>
        <div className="wrapper1">
            <Card img = {require('./img/rp.jpg')} title="Raspberry Pi Intro" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
            <Card img = {require('./img/rp.jpg')} title="Raspbian OS Intro" desc="This is an introductory course for the Raspberry Pi OS Raspbian that will teach you the basics!"/>
            <Card img = {require('./img/rp.jpg')} title="Raspberry Pi Projects" desc="This is an introductory course for some fun Raspberry Pi Projects"/>
        </div>
        </body>
    )
}

function Card(props){
    let navigate = useNavigate();
    function checkLoggedIn(){
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if(user){
                navigate("/course1")
            } else {
                alert('Please login/signup to access course!')
            }
    } else {
        alert('Please login/signup to access course!')
    }
}
    return (
            
        <div className="card1">
            <div className="card__body1">
                <img className='card__image1' src={props.img}></img>
                <h2 className="card__title1">{props.title}</h2>
                <p className="card__description1">{props.desc}</p>   
            </div>
            <button onClick={checkLoggedIn} className="card__btn1">View Course</button>
        </div>
        
    )
}

export default App;