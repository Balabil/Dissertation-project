import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Courses.css'
function App(){
    return(
        <body>
        <div className="wrapper">
            <Card img = {require('./img/default.png')} title="Raspberry Pi Intro" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
            <Card img = {require('./img/default.png')} title="Raspbian OS Intro" desc="This is an introductory course for the Raspberry Pi OS Raspbian that will teach you the basics!"/>
            <Card img = {require('./img/default.png')} title="Raspberry Pi Projects" desc="This is an introductory course for some fun Raspberry Pi Projects"/>
        </div>
        </body>
    )
}

function Card(props){
    let navigate = useNavigate();
    return (
            
        <div className="card">
            <div className="card__body">
                <img className='card__image' src={props.img}></img>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.desc}</p>   
            </div>
            <button onClick={() => {
                navigate("/main");
            }} className="card__btn">View Course</button>
        </div>
        
    )
}

export default App;