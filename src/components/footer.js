import { useState } from 'react';
import { click } from '../common/toastController';
import Icon from '../data/icon';
import '../styles/footer.scss';
import { turnOn } from '../redux/actions/alertAction';
import { useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

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

                {!localStorage.getItem('user') &&
                    <div className='customer-cont'>
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
                        <p className='creative'><i className="fa-brands fa-creative-commons"></i> Design by DuyLong</p>
                    </div>
                }

                {localStorage.getItem('user') &&
                    <>
                        <div className='member-cont'>
                            <div className='member-cont-link services'>
                                <p>Services</p>
                                <a href='#'>Hosting & Domain</a>
                                <a href='#'>Front End</a>
                                <a href='#'>Back End</a>
                                <a href='#'>Database design</a>
                                <a href='#'>Fullstack</a>
                            </div>
                            <div className='member-cont-link'>
                                <p>About us</p>
                                <HashLink to={'/about#header'}>Company</HashLink>
                                <HashLink to={'/about#history'}>History</HashLink>
                                <HashLink to={'/about#event'}>Events</HashLink>
                                <HashLink to={'/career#header'}>Careers</HashLink>
                            </div>
                            <div className='member-cont-link contact'>
                                <p>Contact us</p>
                                <a>Email: phamduylong1742000@gmail.com</a>
                                <a>Phone: 0366310650 - 0933694478</a>
                                <a>Address: Ho Chi Minh city</a>
                            </div>
                        </div>
                        <div className='map'>
                            <p className='creative'><i className="fa-brands fa-creative-commons"></i> Design by DuyLong</p>
                            <div className="gmap_canvas">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5972097981894!2d106.62342397533985!3d10.842104889310669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a297b598cd3%3A0x6bc36a49eb94ad85!2zQ2h1bmcgQ8awIEFuIFPGsMahbmcsIMSQw7RuZyBIxrBuZyBUaHXhuq1uLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697552363476!5m2!1svi!2s"></iframe>
                                <a href="https://techwithlove.com/"></a>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Footer;