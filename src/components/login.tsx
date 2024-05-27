import { useState } from 'react';
import googleLogo from '../assets/google-logo.png';
import '../css/components/login.css'
import InputControl from './inputControl';
import LoginOrRegister from './loginOrRegister';
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';

const LogIn = () => {


  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } })
        alert('success')

      } catch (e: any) {
        console.log(e.message);
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
        <div style={{ width: '7%' }} className='bg-white'>
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