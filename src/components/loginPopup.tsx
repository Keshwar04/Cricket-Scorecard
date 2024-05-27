import AuthModule from './authModule'
import '../css/components/loginPopup.css'
const LoginPopup = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-width">
                    <div className="modal-content ">
                        <AuthModule />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPopup