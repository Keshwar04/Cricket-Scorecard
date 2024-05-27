import '../css/components/passwordInstruction.css'
import {usePreLoginStore} from '../store/zustand/preLogin'
import Button from './button'

const PasswordInstruction = () => {
   const {setIsBoolean,active} = usePreLoginStore()
    const props = {
        title: 'OK',
        activeTitle:true,
        handleClick: () => setIsBoolean({pwdInfoShow : false}),
        width:'20%'
    }
    return (
        <div style={{top: active === 'login' ? '20%' : '34%'}} className="pwd-inst shadow-lg p-1 px-2">
            <b>Password must contain four characters</b>
            <ul>
                <li>One uppercase</li>
                <li>One lowercase</li>
                <li>One number</li>
                <li>One special character(!@#$)</li>
            </ul>
            <div className='d-flex justify-content-center'>
                <Button {...props}/>
            </div>
        </div>
    )
}

export default PasswordInstruction