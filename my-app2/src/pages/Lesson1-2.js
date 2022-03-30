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
            <Card img = {require('./img/default.png')} title="Set up your SD card" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
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
                <p className="card__description">If you have an SD card that doesn’t have the Raspberry Pi OS operating system on it yet, or if you want to reset your Raspberry Pi, you can easily install Raspberry Pi OS yourself. To do so, you need a computer that has an SD card port — most laptop and desktop computers have one.</p> 
                <h2 className="card__title2">The Raspberry Pi OS operating system via the Raspberry Pi Imager</h2>
                <p className="card__description">Using the Raspberry Pi Imager is the easiest way to install Raspberry Pi OS on your SD card.</p> 
                <h2 className="card__title3">Download and launch the Raspberry Pi Imager</h2>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Visit the Raspberry Pi downloads page</p> 
                <img className='card__image' src={require('./img/downloads-page2.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Click on the link for the Raspberry Pi Imager that matches your operating system</p> 
                <img className='card__image' src={require('./img/rpl-download.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- When the download finishes, click it to launch the installer</p> 
                <h2 className="card__title3">Using the Raspberry Pi Imager</h2>
                <p className="card__description">Anything that’s stored on the SD card will be overwritten during formatting. If your SD card currently has any files on it, e.g. from an older version of Raspberry Pi OS, you may wish to back up these files first to prevent you from permanently losing them.</p> 
                <p className="card__description">When you launch the installer, your operating system may try to block you from running it. For example, on Windows I receive the following message:</p> 
                <img className='card__image' src={require('./img/windows-warning.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- If this pops up, click on More info and then Run anyway</p> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Follow the instructions to install and run the Raspberry Pi Imager</p> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Insert your SD card into the computer or laptop SD card slot</p> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- In the Raspberry Pi Imager, select the OS that you want to install and the SD card you would like to install it on</p> 
                <p className="card__description">Note: You will need to be connected to the internet the first time for the the Raspberry Pi Imager to download the OS that you choose. That OS will then be stored for future offline use. Being online for later uses means that the Raspberry Pi imager will always give you the latest version.</p> 
                <img className='card__image' src={require('./img/select-os2.png')}></img> 
                <img className='card__image' src={require('./img/select-sd2.png')}></img> 
                <img className='card__image' src={require('./img/os-and-sd-selected2.png')}></img> 
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Then simply click the WRITE button</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Wait for the Raspberry Pi Imager to finish writing</p>
                <p className="card__description">&nbsp;&nbsp;&nbsp;- Once you get the following message, you can eject your SD card</p>
                <img className='card__image' src={require('./img/write-successful2.png')}></img> 
            </div>
            <button onClick={() => {
                navigate("/quiz1");
            }} className="card__btn">Start Questions</button>
        </div>
    )
}

export default App;