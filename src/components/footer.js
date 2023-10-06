import { useState } from 'react';
import { click } from '../common/toastController';
import Icon from '../data/icon';
import '../styles/footer.scss';
import { turnOn } from '../redux/actions/alertAction';
import { useDispatch } from 'react-redux';

const Footer = () => {

    // Redux hook
    const dispatch = useDispatch();

    // State
    const [email, setEmail] = useState('');

    // Function send email
    const clickSend = () => {
        if (email === '') {
            click(Icon.danger, 'Please type your email !!!');
        }
        else if (!email.includes('@')) {
            click(Icon.danger, 'Your email is wrong !!!');
        }
        else {
            click(Icon.waiting, 'Waiting')

            setTimeout(() => {
                // Success
                dispatch(turnOn('Thank you, we will respond to the fastest. Please wait from us.', '', '', ''));
            }, 3000)
        }
    }

    return (
        <>
            <div className="foot">
                <img src={require('../assets/images/logo.png')}></img>

                <div className='cont'>
                    <div className='message'>
                        <p>In order to avoid spam cases, fraud, fake identities, ... Only customers with accounts created by DL can use our services. To register an account. Please leave an email to get the support from us.</p>
                        <p>Note: This is also an email that will receive an account after successful registration.</p>
                    </div>

                    <div className='form'>
                        <input type="text" placeholder="&#xf0e0; Your email..." onChange={(e) => { setEmail(e.target.value) }} />
                        <a onClick={() => { clickSend() }}>
                            <i className="fa-regular fa-paper-plane"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;