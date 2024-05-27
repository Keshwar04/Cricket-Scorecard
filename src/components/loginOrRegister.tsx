import {usePreLoginStore} from '../store/zustand/preLogin'
import '../css/components/loginOrRegister.css'
const LoginOrRegister = ({isSignup}:any) => {

    const {setActive} = usePreLoginStore()
  return (
    <div className='d-flex flex-column'>
                <div className={`${isSignup ? 'order-1 mt-2' : 'order-2 my-1'}`}>
                    <p className='text-center m-0 either'>OR</p>
                </div>
                <div className={`${isSignup ? 'order-2' : 'order-1 mt-2'} mb-1 text-center`}>
                    <span className='pt-1 form-txt u-line'>{isSignup ? 'Already have an account?' : 'Not have an account?'}</span>
                    <span style={{ cursor: 'pointer' }} className='ms-1 text-primary form-txt' onClick={() => setActive(isSignup ? 'login' : 'signup')}>{isSignup ? 'Login' : 'Signup'}</span>
                </div>
            </div>
  )
}

export default LoginOrRegister