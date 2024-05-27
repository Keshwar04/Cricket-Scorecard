
import AbdBg from '../assets/abd.png'
import MenuImg from '../assets/menu.png'
import LoginPopup from '../components/loginPopup'
import AuthModule from '../components/authModule'
import '../css/pages/prelogin.css'
const PreLogin = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-7 p-0 vh-100'>
                        <img style={{ height: '100%'}} src={AbdBg} className='img-fluid' alt='err' />
                    </div>
                    <div className='d-none d-md-block col-md-5 p-0 vh-100'>
                        <div className='outer mx-auto d-flex justify-content-center align-items-center vh-100'>
                            <AuthModule />
                        </div>
                    </div>
                    <div className='p-0 d-md-none position-absolute fixed-top'>
                        <div style={{ width: '95%' }} className=' mt-1 d-flex justify-content-end'>
                            <div style={{ maxWidth: '6%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src={MenuImg} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <LoginPopup />
                </div>
            </div>
        </div>
    )
}

export default PreLogin