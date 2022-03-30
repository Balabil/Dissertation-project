import React, { useEffect } from 'react';
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
            <Card img = {require('./img/default.png')} title="Introduction" desc="This is an introductory course for the Raspberry Pi that will teach you the basics!"/>
        </div>
        </body>
    )
}

function Card(props){
    let navigate = useNavigate();
    const [isCorrect,setIsCorrect] = useState(false);
    const [isCheck,setIsCheck] = useState(false);
    const [isCheck2,setIsCheck2] = useState(false);
    const [isCheck3,setIsCheck3] = useState(false);
    const [isDisplay,setIsDisplay] = useState(false);
    const [isDisplay2,setIsDisplay2] = useState(false);
    const [isDisplay3,setIsDisplay3] = useState(false);
    const [exp,setExp] = useState(20);

    async function populateQuiz() {
        const req = await fetch('http://localhost:1337/api/quiz', {
            headers: {
                'x-access-token':  localStorage.getItem('token'),
            }
        })

        const data = await req.json()
        
        if(data.exp >= 100){
            resetExp();
        }
        if(data.exp < 100){
            increaseExp();
        }
        if(data.progress >= 50){
            increaseProg()
        }
        console.log(data)
    }

    async function increaseExp() {
       
        const response = await fetch('http://localhost:1337/api/quiz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token':  localStorage.getItem('token'),
          },
          body: JSON.stringify({
            exp
          }),
        })
    }

    async function increaseProg() {
       
        const response = await fetch('http://localhost:1337/api/prog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token':  localStorage.getItem('token'),
          },
          body: JSON.stringify({
          }),
        })
    }

    async function resetExp(){
        const response = await fetch('http://localhost:1337/api/level', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token':  localStorage.getItem('token'),
          },
          body: JSON.stringify({
            
          }),
        })
    }
    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 1) {
          sessionStorage.setItem('reloadCount', String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem('reloadCount');
        }    
      }, [])

    const check=()=>{
        if(isCheck2 == false && isCheck3 == false){
            setIsCheck(!isCheck);  
            setIsCorrect(!isCorrect);
        }
       
    }
    function onClick(){
        if(isCorrect == true){
            setIsDisplay2(!isDisplay2);
            setIsDisplay3(!isDisplay3);
            populateQuiz()
        } else {
            setIsDisplay(!isDisplay);
            setIsDisplay3(!isDisplay3);
        }
    }
    function onClick4(){
        navigate('/quiz2-2')
    }

    const onClick2=()=>{
        if(isCheck == false && isCheck3 == false){
            setIsCheck2(!isCheck2);  
        }
}
    const onClick3=()=>{
        if(isCheck == false && isCheck2 == false){
            setIsCheck3(!isCheck3);  
        }
    }
    return (
    
        <div className="card2">
            <div className="card__body">
                <h2 className="card__title">QUESTION 2</h2>
                <p className="card__description">Where do you connect the mouse?</p> 
                <button onClick={onClick2} className={`card_btn2 ${isCheck2 ? 'card_btn2-checked' : ''}`}>USB-C port</button> 
                <button onClick={check} className={`card_btn2 ${isCheck ? 'card_btn2-checked' : ''}`}>USB port</button> 
                <button onClick={onClick3} className={`card_btn2 ${isCheck3 ? 'card_btn2-checked' : ''}`}>Ethernet Port</button>
                <p className={`check ${isDisplay ? 'check-active' : ''}`}>Incorrect</p>
                <p className={`check2 ${isDisplay2 ? 'check2-active' : ''}`}>Correct</p>
            </div>
            <button onClick={onClick} className={`card__btn ${isDisplay3 ? 'card__btn-checked' : ''}`}>Submit</button>
            <button onClick={onClick4} className={`card__btn-checked ${isDisplay3 ? 'card__btn3' : ''}`}>Next Question</button>
        </div>
    )
}

export default App;