import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'
function App() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      }),
    })

    const data = await response.json()
    if(data.user){
      localStorage.setItem('token',data.user)
      alert('Login Successful!')
      navigate('/main')
    } else {
      alert('Login Unsuccessfu! Please check username and password.')
      navigate('/login')
    }
  }

  return (
  <div className='App'>
    <form onSubmit={loginUser}>
      <div className='form-inner'>
      <h1> Login </h1>
      {/*ERROR! */}
      <div className='form-group'>
        <label htmlFor='email'> Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  name='email' id='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      
        <input type="submit" value="LOGIN"/>
     
    
      </div>

    </form>
  </div>
  )
}

export default App;
