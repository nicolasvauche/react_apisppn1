import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:8080/api/login', {
        email: userEmail,
        password: userPassword
      })
      .then(response => {
        window.localStorage.setItem('token', response.data.token)
        navigate('/')
      })
      .catch(e => {
        console.log(e.code)
      })
  }

  return (
    <form action='' className='app-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='useremail'>Email :</label>
        <input
          type='email'
          id='useremail'
          className='form-control'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='userpassword'>Password :</label>
        <input
          type='password'
          id='userpassword'
          className='form-control'
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
        />
      </div>

      <button type='sumbit' className='app-button'>
        Connexion
      </button>
    </form>
  )
}

export default Login
