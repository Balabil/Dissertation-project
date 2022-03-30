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
            <Card img = {require('./img/default.png')} title="What you will need" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
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
                <h2 className="card__title2">Which Raspberry Pi?</h2>
                <p className="card__description">There are several models of Raspberry Pi, and for most people Raspberry Pi 4 Model B is the one to choose. Raspberry Pi 4 Model B is the newest, fastest, and easiest to use.</p> 
                <p className="card__description">Raspberry Pi 4 comes with 2GB, 4GB, or 8GB of RAM. For most educational purposes and hobbyist projects, and for use as a desktop computer, 2GB is enough.</p> 
                <img className='card__image' src={require('./img/raspberry-pi.png')}></img> 
                <p className="card__description">Raspberry Pi Zero, Raspberry Pi Zero W, and Raspberry Pi Zero WH are smaller and require less power, so they’re useful for portable projects such as robots. It’s generally easier to start a project with Raspberry Pi 4, and to move to Raspberry Pi Zero when you have a working prototype that a smaller Raspberry Pi would be useful for.</p> 
                <h2 className="card__title2">A power supply</h2>
                <p className="card__description">To connect to a power socket, all Raspberry Pi models have a USB port (the same found on many mobile phones): either USB-C for Raspberry Pi 4, or micro USB for Raspberry Pi 3, 2, and 1.</p> 
                <img className='card__image' src={require('./img/pi-power-supply.png')}></img>
                <p className="card__description">You need a power supply that provides:</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- At least 3.0 amps for Raspberry Pi 4</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- At least 2.5 amps for Raspberry Pi 3</p>
                <h2 className="card__title2">A microSD card</h2>
                <p className="card__description">Your Raspberry Pi needs an SD card to store all its files and the Raspberry Pi OS operating system.</p>
                <img className='card__image' src={require('./img/pi-sd.png')}></img>
                <p className="card__description">You need a microSD card with a capacity of at least 8GB.</p>
                <p className="card__description">Many sellers supply SD cards for Raspberry Pi that are already set up with Raspberry Pi OS and ready to go.</p>
                <h2 className="card__title2">A keyboard and a mouse</h2>
                <p className="card__description">To start using your Raspberry Pi, you need a USB keyboard and a USB mouse.</p>
                <p className="card__description">Once you’ve set up your Raspberry Pi, you can use a Bluetooth keyboard and mouse, but you’ll need a USB keyboard and mouse for the first setup.</p>
                <h2 className="card__title2">A TV or computer screen</h2>
                <p className="card__description">To view the Raspberry Pi OS desktop environment, you need a screen, and a cable to link the screen and your Raspberry Pi. The screen can be a TV or a computer monitor. If the screen has built-in speakers, Raspberry Pi is able to use these to play sound.</p>
                <h2 className="card__title2">HDMI</h2>
                <p className="card__description">Your Raspberry Pi has an HDMI output port that is compatible with the HDMI port of most modern TVs and computer monitors. Many computer monitors may also have DVI or VGA ports.</p>
                <p className="card__description">Raspberry Pi 4 has two micro HDMI ports, allowing you to connect two separate monitors.</p>
                <p className="card__description">You need either a micro HDMI to HDMI cable, or a standard HDMI to HDMI cable plus a micro HDMI to HDMI adapter, to connect Raspberry Pi 4 to a screen.</p>
                <p className="card__description">Raspberry Pi 1, 2, and 3 have a single full-size HDMI port, so you can connect them to a screen using a standard HDMI to HDMI cable.</p>


            </div>
            <button onClick={() => {
                navigate("/lesson1-2");
            }} className="card__btn">Next Page</button>
        </div>
    )
}

export default App;