import '../styles/login.scss';
import '../styles/toast.scss';
import { account } from '../data/account';
import { useEffect, useState } from 'react';
import Toast from '../components/toast';
import Icon from '../data/icon';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { checkLogin, checkAccount } from '../common/userController';
import store from '../redux/store/store';
import { login } from '../redux/actions/accountAction';

const Login = () => {

    // State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('');
    const [mess, setMess] = useState('');

    // Navigate
    const navigate = useNavigate();

    // Redux hook
    const dispatch = useDispatch();

    // ComponentDidUpdate
    useEffect(() => {
        if (checkLogin()) {
            navigate('/');
        }
    }, [store.getState('acc')])

    // set error function
    const setError = (icon, mess) => {

        // set icon and mess when something was wrong
        setIcon(icon);
        setMess(mess);

        // then set them to blank after 3s when we already used them
        setTimeout(() => {
            setIcon('');
            setMess('');
        }, 3000)
    }

    // function control the user when they tried to sign in
    const signIn = () => {
        if (username === '' || password === '') {
            setError(Icon.danger, 'Please type all information');
        }
        else {
            const acc = { username: username, password: password };
            if (!checkAccount(acc)) {
                setError(Icon.danger, 'Something was wrong');
            }

            // Success
            else {
                dispatch(login(checkAccount(acc)));
                navigate('/');
            }
        }
    }

    return (
        <>
            <div className='bg'>
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
                            Sign in
                        </a>
                    </div>
                </div>

                {/* Reporter */}
                <Toast
                    icon={icon}
                    mess={mess}
                ></Toast>
            </div>
        </>
    )
}

export default Login;