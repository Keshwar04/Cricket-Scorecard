import { useEffect } from 'react'
import eyeOpen from '../assets/eye-open.png';
import eyeClose from '../assets/eye-close.png';
import pwdInfo from '../assets/pwd-info.png';
import { validator } from '../service/validation'
import { usePreLoginStore } from '../store/zustand/preLogin'
import Button from './button';
import '../css/components/inputControl.css'
import PasswordInstruction from './passwordInstruction';

const InputControl = ({ isSignup }: any) => {
    const { errors, isboolean, userCredntial, active,
        setIsBoolean, setErrors, setUserCredential } = usePreLoginStore()

    useEffect(() => {
        if (active === 'login') {
            setUserCredential({ login: {} })
        } else {
            setUserCredential({ signup: {} })
        }
    }, [])

    const fieldSate = active === 'login' ? 'login' : 'signup';

    const handleClick = () => {
        const error = validator(userCredntial[fieldSate],fieldSate)
        const errStr = Object.values(error).join('') 
        if(errStr){
            setErrors({ [fieldSate]: error })
        }else{
            setErrors({})
            setUserCredential({})
            alert('success')
        }
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserCredential({
            [fieldSate]: { ...userCredntial[fieldSate], [name]: value }
        })
    }

    const props = {
        width: 'w-100',
        handleClick: handleClick,
        title: isSignup ? 'SIGNUP' : 'LOGIN',
        activeTitle: true
    }

    return (
        <div>
            {isSignup &&
                <>
                    <div className='mt-3'>
                        <input type='text' className='form-control' name='name' placeholder='Enter Name' onChange={handleChange} value={userCredntial[fieldSate]?.name || ''} />
                    </div>
                    <p className='mb-2 pwd-txt'>{errors[fieldSate]?.name}</p>
                </>
            }
            <div className={`${!isSignup && 'mt-3'}`}>
                <input type="email" className="form-control" name='mail' placeholder="Enter email" onChange={handleChange} value={userCredntial[fieldSate]?.mail || ''} />
            </div>
            <p className='mb-2 pwd-txt'>{errors[fieldSate]?.mail}</p>
            <div className='position-relative'>
                <input type={!isboolean.pwdIconShow ? "password" : 'text'} className="form-control" name='pwd' placeholder="Enter password" onChange={handleChange} value={userCredntial[fieldSate]?.pwd || ''}></input>
                <div className='position-absolute h-100 d-flex align-items-center justify-content-center top-0' style={{ width: '5%', right: '4%' }}>
                    <img style={{ cursor: 'pointer' }} src={!isboolean.pwdIconShow ? eyeClose : eyeOpen} className='img-fluid' onClick={() => setIsBoolean({ pwdIconShow: !isboolean.pwdIconShow })} />
                </div>
            </div>
            <div className='d-flex'>
                <div>
                    <p className='mb-2 pwd-txt'>
                        {errors[fieldSate]?.pwd === 'update' ? 'Enter valid password format' : errors[fieldSate]?.pwd}
                    </p>
                </div>
                {errors[fieldSate]?.pwd === 'update' &&
                    <>
                        <div className='pwd-img-container d-flex align-items-start ms-1' onClick={() => setIsBoolean({ pwdInfoShow: true })}>
                            <img src={pwdInfo} className='img-fluid' />
                        </div>
                    </>

                }
                {isboolean.pwdInfoShow && <PasswordInstruction />}
            </div>
            <Button {...props} />
        </div>
    )
}

export default InputControl