import '../css/components/login.css'
import googleLogo from '../assets/google-logo.png';
import InputControl from './inputControl';
import LoginOrRegister from './loginOrSignup';
import { useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { firebasePostData } from '../service/firebase';

const LogIn = () => {

  const navigate = useNavigate()

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try { 
        let res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }) 
        const userData = {
          name: res.data.name,
          mail: res.data.email,
          loginTime: new Date().toLocaleString()
        }
        navigate('/home')
        firebasePostData('users-google-login', userData)
        localStorage.setItem('islogin', 'true')
      } catch (e) {
        alert('Google login not working now...Try after sometime')
      }
    },
  });


  return (
    <div>
      <InputControl />
      <LoginOrRegister />
      <div style={{ cursor: 'pointer', marginBottom: '0.75rem' }}
        className='bg-primary d-flex justify-content-center align-items-center py-1 border'
        onClick={() => handleGoogleLogin()}
      >
        <div className='bg-white img-container'>
          <img src={googleLogo} className='img-fluid' />
        </div>
        <div>
          <p className='ps-3 m-0 text-white google'>Continue with google</p>
        </div>
      </div>
    </div>
  )
}

export default LogIn