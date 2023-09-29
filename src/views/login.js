import '../styles/login.scss';
import '../styles/toast.scss';
import { useEffect, useState } from 'react';
import Icon from '../data/icon';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { checkLogin, checkAccount } from '../common/userController';
import { login } from '../redux/actions/accountAction';
import { click } from '../common/toastController';

const Login = () => {

    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [waiting, setWaiting] = useState(false);

    // Navigate
    const navigate = useNavigate();

    // Redux hook
    const dispatch = useDispatch();

    // ComponentDidUpdate
    useEffect(() => {
        if (checkLogin()) {
            navigate('/');
        }
    }, [])

    useEffect(() => {

        const back = document.getElementsByClassName('back')[0];

        if (waiting) {
            back.style.top = '-500px';
            back.style.left = '-500px';
        }
        else {
            back.style.top = '-75px';
            back.style.left = '-75px';
        }
    }, [waiting])

    // function control the user when they tried to sign in
    const signIn = () => {
        if (username === '' || password === '') {
            click(Icon.danger, 'Please type all information !!!');
        }
        else {
            click(Icon.waiting, 'Wait a sec...');
            setWaiting(true);

            setTimeout(() => {
                const acc = { username: username, password: password };
                if (!checkAccount(acc)) {
                    setWaiting(false);
                    click(Icon.danger, 'Something was wrong');
                }

                // Success
                else {
                    dispatch(login(checkAccount(acc)));
                    click(Icon.success, 'You logged in !!!');
                    navigate('/');
                }
            }, 3000)
        }
    }

    return (
        <>
            <div className='bg'>
                {/* Go Back button */}
                <div className='back' onClick={() => { navigate(-1) }}>
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                </div>

                {/* Form login */}
                <div className='form-login'>
                    {/* Logo */}
                    <div className='logo'>
                        <img src={require('../assets/images/logo.png')} alt='Loading...' />
                    </div>

                    {/* Decore */}
                    <div className='decore1'></div>
                    <div className='decore2'></div>

                    {/* Login form */}
                    <div className='form'>
                        <div className='username'>
                            <i className="fa-solid fa-user icon"></i>
                            <input type='text' placeholder='Username' onChange={(e) => { setUsername(e.target.value) }}></input>
                        </div>

                        <div className='password'>
                            <i className="fa-solid fa-key icon"></i>
                            <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}></input>
                        </div>

                        <br></br>

                        <a onClick={() => { signIn() }} className='button'>
                            Sign in <i className="fa-solid fa-right-to-bracket"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;