import React from 'react'
import '../css/components/authModule.css'
import Button from './button'
import LogIn from './login'
import SignUp from './signup'
import { usePreLoginStore } from '../store/zustand/preLogin'
const AuthModule = () => {

    const { active, setActive } = usePreLoginStore()

    const createProps = (type:string) => ({
        title: type.toUpperCase(),
        width: 'w-50',
        activeTitle: active === type,
        handleClick: () => setActive(type)
    });
    
    const loginProps = createProps('login');
    const signupProps = createProps('signup');

    return (
        <div className="border-bg py-2 modal-body p-0 d-flex justify-content-center align-items-center">
            <div className='w-100 res-width shadow p-2 bg-white rounded mx-2'>
                <div className='justify-content-end close-btn-container'>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className='text-center text-uppercase mb-3'>
                    <h5>{active === 'login' ? 'Login Form' : 'Signup Form'}</h5>
                </div>
                <div className='d-flex'>
                    <Button {...loginProps} />
                    <Button {...signupProps} />
                </div>
                {active === 'login' ? <LogIn /> : <SignUp />}
            </div>
        </div>
    )
}

export default AuthModule