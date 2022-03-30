import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Lesson.css'
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
            <Card img = {require('./img/default.png')} title="Connect your Raspberry Pi" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
        </div>
        </body>
    )
}

function Card(props){
    let navigate = useNavigate();
    return (
    
        <div className="card2">
            <div className="card__body">
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">Now get everything connected to your Raspberry Pi. It’s important to do this in the right order, so that all your components are safe.</p> 
                <img className='card__image' src={require('./img/pi-labelled.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Insert the SD card you’ve set up with Raspberry Pi OS into the microSD card slot on the underside of your Raspberry Pi.</p>
                <img className='card__image' src={require('./img/pi-sd.png')}></img> 
                <p className="card__description">Note: Many microSD cards come inside a larger adapter — you can slide the smaller card out using the lip at the bottom.</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Find the USB connector end of your mouse’s cable, and connect the mouse to a USB port on Raspberry Pi (it doesn’t matter which port you use).</p>
                <img className='card__image' src={require('./img/pi-mouse.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Connect the keyboard in the same way.</p>
                <img className='card__image' src={require('./img/pi-keyboard.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Make sure your screen is plugged into a wall socket and switched on.</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Look at the HDMI port(s) on your Raspberry Pi — notice that they have a flat side on top.</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Use a cable to connect the screen to Raspberry Pi’s HDMI port — use an adapter if necessary.</p>
                <h2 className="card__title3">Raspberry Pi 4</h2>
                <p className="card__description">Connect your screen to the first of Raspberry Pi 4’s HDMI ports, labelled HDMI0.</p>
                <p className="card__description">Note: Make sure you have used HDMI0 (nearest the power in port) rather than HDMI1.</p>
                <img className='card__image' src={require('./img/pi-hdmi-1.png')}></img> 
                <p className="card__description">You can connect an optional second screen in the same way.</p>
                <img className='card__image' src={require('./img/pi-hdmi-2.png')}></img> 
                <h2 className="card__title3">Raspberry Pi 1, 2, 3</h2>
                <p className="card__description">Connect your screen to the single HDMI port.</p>
                <img className='card__image' src={require('./img/pi-3-hdmi.png')}></img> 
                <p className="card__description">Note: Nothing will display on the screen, because your Raspberry Pi is not running yet.</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- If you want to connect your Raspberry Pi to the internet via Ethernet, use an Ethernet cable to connect the Ethernet port on Raspberry Pi to an Ethernet socket on the wall or on your internet router. You don’t need to do this if you want to use wireless connectivity, or if you don’t want to connect to the internet.</p>
                <img className='card__image' src={require('./img/pi-ethernet.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- If the screen you are using has speakers, sound will play through those. Alternatively, connect headphones or speakers to the audio port if you prefer.</p>
                <img className='card__image' src={require('./img/pi-headphones.png')}></img> 
            </div>
            <button onClick={() => {
                navigate("/lesson1-4");
            }} className="card__btn">Next Page</button>
        </div>
    )
}

export default App;