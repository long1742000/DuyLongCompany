import { useEffect, useState } from 'react';
import '../styles/alert.scss';
import { useDispatch } from 'react-redux';
import { turnOff } from '../redux/actions/alertAction';
import { listController } from '../common/alertController';
import Icon from '../data/icon';

const Alert = (props) => {

    //State
    const [i, setI] = useState('');

    // Redux hook
    const dispatch = useDispatch();

    // ComponentDidMount
    useEffect(() => {
        const alert = document.getElementsByClassName('alert')[0];

        if (props.alert !== '') {
            alert.style.top = '0';
            setI(props.alert.icon);
        }
        else {
            alert.style.top = '-100%';
        }

    }, [props])

    // If user click Yes!!!
    const clickYes = (controller) => {
        setI(Icon.waiting);
        setTimeout(() => {
            listController(controller);
            dispatch(turnOff());
        }, 2000)
    }

    return (
        <div className='alert'>
            <div className='header'>
                <div className='title'>
                    <img src={require('../assets/images/logo.png')} alt='Loading...'></img>
                </div>
                <i onClick={() => { dispatch(turnOff()) }} className="fa-solid fa-xmark"></i>
            </div>
            <div className='body'>
                <p>{props.alert.mess}</p>
            </div>
            <div className='footer'>
                <div className='button'>
                    <a onClick={() => { clickYes(props.alert.controller) }} className='yes'>{props.alert.button} <i className={i}></i></a>
                    <a onClick={() => { dispatch(turnOff()) }} className='no'>Cancel</a>
                </div>
            </div>
        </div>
    )
}

export default Alert;