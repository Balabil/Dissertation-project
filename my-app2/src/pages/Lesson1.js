import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Lesson.css'
import './popup.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function App(){
    return(
        <body>
        <div className='general-box'>
            <img src={require('./img/pog-edit.webp')}></img>
            <div className='box-text'>
                <h1>Setting Up The Raspberry Pi</h1>
            </div>
        </div>
        <div className="wrapper">
            <Card img = {require('./img/default.png')} title="Introduction" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
        </div>
        </body>
    )
}

function Card(props){
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [ach, setAch] = useState(1); 
    const closeModal = () => setOpen(false);

    async function checkAch() {
       
        const response = await fetch('http://localhost:1337/api/ach', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token':  localStorage.getItem('token'),
          },
          body: JSON.stringify({
            ach
          }),
        })
        const data = await response.json()
        if(data.status == "ok"){
            console.log('hello')
            setOpen(!open);
        }
    }

    useEffect(() => {
        checkAch()
      }, [])
    return (
        
        <div className="card2">
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">Here you’ll learn about your Raspberry Pi, what things you need to use it, and how to set it up.</p> 
                <p className="card__description">The Raspberry Pi is a small computer that can do lots of things. You plug it into a monitor and attach a keyboard and mouse.</p> 
                <img className='card__image' src={require('./img/pi-plug-in.gif')}></img> 
            </div>
            <button onClick={() => {
                navigate("/lesson1-1");
            }} className="card__btn">Next Page</button>     
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>        
              <div className="modal">          
                <a className="close" onClick={closeModal}>  &times;</a> 
                <a className="content">Achievement Unlocked! Started First Lesson.</a>
              </div>      
              </Popup>
        </div>
    )
}

export default App;