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
            <Card img = {require('./img/default.png')} title="Start up your Raspberry Pi" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
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
                <p className="card__description">Your Raspberry Pi doesn’t have a power switch. As soon as you connect it to a power outlet, it will turn on.</p> 
                <p className="card__description2">- Plug the power supply into a socket and connect it to your Raspberry Pi’s power port.</p>
                <img className='card__image' src={require('./img/pi-power.png')}></img> 
                <p className="card__description">You should see a red LED light up on the Raspberry Pi, which indicates that Raspberry Pi is connected to power. As it starts up (this is also called booting), you will see raspberries appear in the top left-hand corner of your screen.</p> 
                <p className="card__description">After a few seconds the Raspberry Pi OS desktop will appear.</p> 
                <img className='card__image' src={require('./img/pi-desktop.png')}></img> 
                <h2 className="card__title3">Finishing the setup</h2>
                <p className="card__description">When you start your Raspberry Pi for the first time, the Welcome to Raspberry Pi application will pop up and guide you through the initial setup.</p>
                <img className='card__image' src={require('./img/piwiz.png')}></img>
                <p className="card__description2">- Click on Next to start the setup.</p>
                <p className="card__description2">- Set your Country, Language, and Timezone, then click on Next again.</p>
                <img className='card__image' src={require('./img/piwiz2.PNG')}></img>
                <p className="card__description2">- Enter a new password for your Raspberry Pi and click on Next.</p>
                <img className='card__image' src={require('./img/piwiz3.PNG')}></img>
                <p className="card__description2">- Connect to your wireless network by selecting its name, entering the password, and clicking on Next.</p>
                <img className='card__image' src={require('./img/piwiz4.PNG')}></img>
                <p className="card__description">Note: If your model of Raspberry Pi doesn’t have wireless connectivity, you won’t see this screen.</p>
                <p className="card__description">Note: Wait until the wireless connection icon appears and the correct time is shown before trying to update the software.</p>
                <p className="card__description2">- Click on Next, and let the wizard check for updates to Raspberry Pi OS and install them (this might take a little while).</p>
                <img className='card__image' src={require('./img/piwiz6.PNG')}></img>
                <p className="card__description2">- Click on Restart to finish the setup.</p>
                <p className="card__description">Note: You will only need to reboot if that’s necessary to complete an update.</p>
                <img className='card__image' src={require('./img/piwiz7b.png')}></img>


            </div>
            <button onClick={() => {
                navigate("/quiz2");
            }} className="card__btn">Start Questions</button>
        </div>
    )
}

export default App;