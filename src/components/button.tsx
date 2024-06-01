import '../css/components/button.css'
import { buttonType } from '../type/prelogin'

const Button = ({ title, activeTitle, handleClick, width }: buttonType) => {
    return (
        <>
            <div style={{ width: title === 'OK' && width }} className={`${width} d-flex border rounded`}>
                <div style={{ cursor: 'pointer' }}
                    className={`${activeTitle ? 'grad1' : ''} ${title === 'OK' ? '' : 'py-1'} btn-txt w-100 text-center`}
                    onClick={handleClick}>{title}
                </div>
            </div>
        </>
    )
}

export default Button