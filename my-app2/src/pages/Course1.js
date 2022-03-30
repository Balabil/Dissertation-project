import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect } from 'react';
import {CircularProgressbar} from 'react-circular-progressbar';
import { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useNavigate,Link } from 'react-router-dom'
import './Courses.css'
import jwt_decode from 'jwt-decode'
function App(){
  let navigate = useNavigate();
    const [value,setValue] = useState(1)
    const [value2,setValue2] = useState(0)
    const [ach,setAch] = useState(false)
    const [ach2,setAch2] = useState(false)
    const [ach3,setAch3] = useState(false)
    const [ach4,setAch4] = useState(false)
    const [ach5,setAch5] = useState(false)
    const [lvl,setLvl] = useState(1)
    const [percentage,setPercentage] = useState(66)
    const [percentage2,setPercentage2] = useState(0)
    const slideImages = [
      {
        url: require('./img/lesson1-1.jpeg'),
        caption: 'Slide 1',
        goto: '/lesson1'
      },
      {
        url: require('./img/lesson1-2.jpeg'),
        caption: 'Slide 2',
        goto: '/lesson1-3'
      },
      {
        url: require('./img/temp.png'),
        caption: 'Slide 3',
        goto: '/lesson3'
      },
    ];
    async function populateMain() {
      console.log('hello')
      const req = await fetch('http://localhost:1337/api/main2', {
          headers: {
              'x-access-token':  localStorage.getItem('token'),
          }
      })
      const data = await req.json()
      setPercentage2(data.progress)
      if(data.exp >= 100){
        increaseLvl()
        setLvl(data.score+1)
        setPercentage(0)
      } else {
      setPercentage(data.exp)
      setLvl(data.score)
      }
      if(data.achievement >= 1){
        setAch(!ach)
      }
      if(data.achievement >= 2){
        setAch2(!ach2)
      }
      if(data.achievement >= 3){
        setAch3(!ach3)
      }
      if(data.achievement >= 4){
        setAch4(!ach4)
      }
      if(data.achievement >= 5){
        setAch5(!ach5)
      }
      console.log(data)
  }
  async function increaseLvl() {
       
    const response = await fetch('http://localhost:1337/api/level', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token':  localStorage.getItem('token'),
      },
      body: JSON.stringify({
        value, value2
      }),
    })
}

      useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 2) {
          sessionStorage.setItem('reloadCount', String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem('reloadCount');
        }
          populateMain()
      }, [])
    return(
        <body>
          <ProgressBar className='bar' completed={percentage2} />
        <div className='progress2'>
        <h1 className='exp'>Experience Points</h1>
        <h2 className='lvl'>Level {"" + lvl}</h2>
        <div className="progress" >
        <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(2, 152, 199, ${percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f88',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}
/>
        </div>
        </div>
        <div className="slide-container">
        <Slide autoplay={false}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='image-container'>
              <img src={slideImage.url} className="image" />
                
              </div>
              <Link className='boxButton' to={slideImage.goto}>START LESSON</Link>
            </div>
            
          ))} 
        </Slide>
      </div>
      <div className='ach'>
          <h1 className='acheivements'>Acheivements</h1>
          <img className={`achImg ${ach ? 'achImg-checked' : ''}`} src={require('./img/trophy2.png')} width='70' />
          <img className={`achImg2 ${ach2 ? 'achImg2-checked' : ''}`} src={require('./img/trophy2.png')} width='70' />
          <img className={`achImg2 ${ach3 ? 'achImg2-checked' : ''}`} src={require('./img/trophy2.png')} width='70' />
          <img className={`achImg2 ${ach4 ? 'achImg2-checked' : ''}`} src={require('./img/trophy2.png')} width='70' />
          <img className={`achImg2 ${ach5 ? 'achImg2-checked' : ''}`} src={require('./img/trophy2.png')} width='70' />
      

      </div>

      
        </body>
    )
}

export default App; 