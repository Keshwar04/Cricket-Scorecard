import React from 'react'
import InputControl from './inputControl'
import LoginOrRegister from './loginOrSignup'

const SignUp = () => {
  return (
    <div>
      <InputControl isSignup={true} />
      <LoginOrRegister isSignup={true}/>
    </div>
  )
}

export default SignUp