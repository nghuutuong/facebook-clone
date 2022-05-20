import './Login.css';
import {useStateValue} from './Provider';
import {auth, provider} from './firebase';
import {actionTypes} from './Reducer';
import facebook from './images/dF5SId3UHWd.svg'
const Login = () => {
    const [state, dispatch] = useStateValue()
    const Login = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch((error) => alert(error.messgae));
    }
    return (
        <>
            <div className="login_page_top">
                <div className="image_slogan">
                    <img src={facebook} alt="facebook" />
                    <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
                </div>
                <div className="login_button">
                    <button onClick={Login} className="login_on" type="submit">
                        Đăng nhập
                    </button>
                </div>
            </div>
            <div className="login_page_footer">
                <div className="list_language">
                    <ul className="language_select">
                        <li className="language">Tiếng Việt</li>            
                        <li className="language">English (UK)</li>
                        <li className="language">中文(台灣)</li>
                        <li className="language">한국어</li>
                        <li className="language">日本語</li>
                        <li className="language">Français (France)</li>
                        <li className="language">ภาษาไทย</li>
                        <li className="language">Español</li>
                        <li className="language">Português (Brasil)</li>
                        <li className="language">Deutsch</li>
                        <li className="language">Italiano</li>
                    </ul>
                </div>
                <div className="border"></div>
                <div className="social_page">
                    <ul className="social_list">
                        <li className="social">Đăng ký</li>
                        <li className="social">Đăng nhập</li>
                        <li className="social">Messenger</li>
                        <li className="social">Facebook Lite</li>
                        <li className="social">Watch</li>
                        <li className="social">Địa điểm</li>
                        <li className="social">Trò chơi</li>
                        <li className="social">Marketplace</li>
                        <li className="social">Facebook Pay</li>
                        <li className="social">Oculus</li>
                        <li className="social">Portal</li>
                        <li className="social">Instagram</li>
                                            
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Login;
