
import AbdBg from '../assets/abd.png'
import LoginPopup from '../components/loginPopup'
import AuthModule from '../components/authModule'
import { FaUserCircle } from "react-icons/fa";
import '../css/pages/prelogin.css'

const PreLogin = () => {
    return (
            <div className='container-fluid h-100'>
                <div className='row h-100'>
                    <div className='col-12 col-md-7 p-0 h-100'>
                        <img src={AbdBg} className='abd-img' alt='err' />
                    </div>
                    <div className='d-none d-md-block col-md-5 p-0 h-100'>
                        <div className='outer mx-auto d-flex justify-content-center align-items-center h-100'>
                            <AuthModule />
                        </div>
                    </div>
                    <div className='p-0 d-md-none position-absolute fixed-top'>
                        <div style={{ width: '95%' }} className=' mt-1 d-flex justify-content-end'>
                            <div className='mt-1' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FaUserCircle style={{cursor:'pointer'}} color='white' size={22} />
                            </div>
                        </div>
                    </div>
                    <LoginPopup />
                </div>
            </div>
    )
}

export default PreLogin