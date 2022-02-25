import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1337/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, password
      }),
    })

    const data = await response.json()

    if(data.status === 'ok') {
      navigate("/login")
    }
  }

  return (
  <div className='App'>
    
    <form onSubmit={registerUser}>
    <div className='form-inner'>
    <h1> Register </h1>
      {/*ERROR! */}
      <div className='form-group'>
        <label htmlFor='Name'> Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name"  name='name' id='name' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'> Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  name='email' id='email' />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>
      
        <input type="submit" value="REGISTER"/>
    </div>
    </form>
  </div>
  )
}

export default App;
