import { useEffect, useState } from 'react';
import '../styles/aboutDL.scss'
import History from '../components/history';
import Pagination from '../components/pagination';
import CareerBtn from '../components/careerBtn';
import Icon from '../data/icon';
import { turnOn } from '../redux/actions/alertAction';
import { useDispatch } from 'react-redux';
import { click } from '../common/toastController';

const AboutDL = () => {

    // States
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selected, setSelected] = useState('');
    const [detail, setDetail] = useState('');

    // Dispatch state
    const dispatch = useDispatch();

    useEffect(() => {
        // Controller display animation {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
        // }
    }, [])

    // Click send
    const clickSend = () => {
        if (fullName === '' || email === '' || phone === '' || selected === '' || detail === '') {
            click(Icon.infor, 'Please type all information !!!');
        }
        else if (!email.includes('@')) {
            click(Icon.infor, 'Your email is wrong !!!');
        }
        else {
            click(Icon.waiting, 'Waiting')

            setTimeout(() => {
                // Success
                dispatch(turnOn('Thank you for this, we will respond if necessary.', '', '', ''));
            }, 3000)
        }
    }

    return (
        <>
            <div className="about">

                {/* Introduce */}
                <div id='header' className='about-introcude'>
                    <div className='about-introcude-text'>
                        <p className='about-introcude-content hidden'>
                            We always want to bring you the best technology. Our team prioritizes customers, always takes the prestige as standard. We are always aiming for the latest technologies to ensure our customers are always satisfied with our services
                            You can rest assured when using our products because we always upgrade your product every year. And the last word we thank you for accompanying us, contributing to the development of our company.
                        </p>
                    </div>
                    <div className='about-introcude-img'>
                        <div className='about-introcude-img-bg'>
                            <img src={require('../assets/images/aboutUspage/main.png')} alt='Loading...'></img>
                            <div className='icon-contain'>
                                <i className="fa-solid fa-computer a"></i>
                                <i className="fa-solid fa-mobile-screen-button b"></i>
                                <i className="fa-solid fa-laptop c"></i>
                                <i className="fa-solid fa-headphones d"></i>
                                <i className="fa-solid fa-gamepad e"></i>
                                <i className="fa-solid fa-camera-retro f"></i>
                                <i className="fa-regular fa-keyboard g"></i>
                                <i className="fa-solid fa-computer-mouse h"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-introcude second'>
                    <div className='about-introcude-img'>
                        <div className='about-introcude-img-bg'>
                            <img src={require('../assets/images/aboutUspage/main-2.png')} alt='Loading...'></img>
                            <div className='icon-contain'>
                                <i className="fa-solid fa-computer a"></i>
                                <i className="fa-solid fa-mobile-screen-button b"></i>
                                <i className="fa-solid fa-laptop c"></i>
                                <i className="fa-solid fa-headphones d"></i>
                                <i className="fa-solid fa-gamepad e"></i>
                                <i className="fa-solid fa-camera-retro f"></i>
                                <i className="fa-regular fa-keyboard g"></i>
                                <i className="fa-solid fa-computer-mouse h"></i>
                            </div>
                        </div>
                    </div>
                    <div className='about-introcude-text'>
                        <p className='about-introcude-content hidden'>
                            Our goal is to become the world's leading technology company. So we always race with technology to develop ourselves.
                            This does not mean that we will leave those who do not keep up, but we will support each other to develop to ensure that each individual in the company can catch up with technology.
                        </p>
                    </div>
                </div>

                {/* Leaders */}
                <div className='about-our-leaders hidden'>
                    <h1>OUR LEADERS</h1>
                    <div className='about-leader-item'>
                        <div className='about-leader-img'>
                            <img src={require('../assets/images/aboutUspage/leader-1.jpg')} alt='Loading...'></img>
                        </div>
                        <div className='about-leader-infor'>
                            <p className='name'>Mr. Pham Hoang Duy Long</p>
                            <p className='position'>President of DL Company</p>
                            <a href='#'>Read more</a>
                        </div>
                    </div>

                    <div className='about-leader-item'>
                        <div className='about-leader-img'>
                            <img src={require('../assets/images/aboutUspage/user.jpg')} alt='Loading...'></img>
                        </div>
                        <div className='about-leader-infor'>
                            <p className='name'>Someone in the future</p>
                            <p className='position'>Vice president of DL Company</p>
                            <a href='#'>Read more</a>
                        </div>
                    </div>

                    <div className='about-leader-item'>
                        <div className='about-leader-img'>
                            <img src={require('../assets/images/aboutUspage/user.jpg')} alt='Loading...'></img>
                        </div>
                        <div className='about-leader-infor'>
                            <p className='name'>Someone in the future</p>
                            <p className='position'>Director of DL Company</p>
                            <a href='#'>Read more</a>
                        </div>
                    </div>
                </div>

                {/* Perspectives */}
                <div className='about-perspectives'>
                    <h1>PERSPECTIVES</h1>
                    <div className='about-perspectives-contain'>
                        <div className='about-perspectives-item hidden'>
                            <img src={require('../assets/images/aboutUspage/perspective-1.jpg')} alt='Loading...'></img>
                            <div className='about-perspectives-img-light'></div>
                            <p className='title'>The development of technology</p>
                            <p>The development of technology is due to the arrangement of creation. So let's grasp it and develop ourselves.</p>
                        </div>
                        <div className='about-perspectives-item hidden'>
                            <img src={require('../assets/images/aboutUspage/perspective-2.jpg')} alt='Loading...'></img>
                            <div className='about-perspectives-img-light'></div>
                            <p className='title'>Survival in the market</p>
                            <p>Survival in the market is a must -face if you are a business. So try to grasp the changes of the market and update yourself.</p>
                        </div>
                        <div className='about-perspectives-item hidden'>
                            <img src={require('../assets/images/aboutUspage/perspective-3.jpg')} alt='Loading...'></img>
                            <div className='about-perspectives-img-light'></div>
                            <p className='title'>Customer care</p>
                            <p>Customers are the most important factor contributing to the development of a business. So taking care of them is the fastest way to help us develop.</p>
                        </div>
                        <div className='about-perspectives-item hidden'>
                            <img src={require('../assets/images/aboutUspage/perspective-4.jpg')} alt='Loading...'></img>
                            <div className='about-perspectives-img-light'></div>
                            <p className='title'>Respect for employees</p>
                            <p>The employees are those who have experienced difficult stages. So is it a mandatory respect for them? Yes, it is required.</p>
                        </div>
                    </div>
                </div>

                {/* Contact us */}
                <div id='contact' className='contact'>
                    <h1>CONTACT US</h1>
                    <div className='contact-content'>

                        {/* FORM */}
                        <div className='contact-form'>
                            <br /><br />
                            <div className='form-input input-name'>
                                <input onChange={(e) => { setFullName(e.target.value) }} name='name' type='text' autoComplete="off" required></input>
                                <span to='name'>Full name</span>
                            </div>

                            <div className='form-input input-name'>
                                <input onChange={(e) => { setEmail(e.target.value) }} name='email' type='text' autoComplete="off" required></input>
                                <span to='email'>Email</span>
                            </div>

                            <div className='form-input input-name'>
                                <input onChange={(e) => { setPhone(e.target.value) }} name='phone' type='text' autoComplete="off" required></input>
                                <span to='phone'>Phone number</span>
                            </div>

                            <div className='form-input'>
                                <div className='input-position'>
                                    <div className={selected === '' ? 'input' : 'input selected'}>
                                        <span className='input-title'>About ...</span>
                                        <span className='input-arrow'><i className="fa-solid fa-caret-left"></i></span>
                                        <p className='input-value'>{selected}</p>
                                        <div className='choose-position'>
                                            <p onClick={() => { setSelected('') }}>Nope</p>
                                            <p onClick={() => { setSelected('Our Products') }}>Our Products</p>
                                            <p onClick={() => { setSelected('Our Services') }}>Our Services</p>
                                            <p onClick={() => { setSelected('Our Customer care') }}>Our Customer care</p>
                                            <p onClick={() => { setSelected('Our Company') }}>Our Company</p>
                                            <p onClick={() => { setSelected('Other') }}>Other</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-input input-detail'>
                                <textarea onChange={(e) => { setDetail(e.target.value) }} name='detail' type='text' required></textarea>
                                <span to='detail'>Content</span>
                            </div>

                            <div className='btn-send'>
                                <div onClick={() => { clickSend() }} className='btn'>
                                    <p>SEND</p>
                                    <div className='btn-bg'></div>
                                </div>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className='contact-img'>
                            <div className='contact-introcude-img-bg'>
                                <img src={require('../assets/images/aboutUspage/contact.png')} alt='Loading...'></img>
                                <div className='icon-contain'>
                                    <i className={`${Icon.message} a`}></i>
                                    <i className={`${Icon.message} b`}></i>
                                    <i className={`${Icon.message} c`}></i>
                                    <i className={`${Icon.message} d`}></i>
                                    <i className={`${Icon.message} e`}></i>
                                    <i className={`${Icon.message} f`}></i>
                                    <i className={`${Icon.message} g`}></i>
                                    <i className={`${Icon.message} h`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company history */}
                <History></History>

                {/* Event list */}
                <div id='event' className='about-event'>
                    <h1>OUR EVENTS</h1>

                    <div className='about-event-list'>
                        <div className='about-event-item hidden'>
                            <div className='event-image'>
                                <img src={require('../assets/images/homepage/event-1.jpg')} alt='Loading...'></img>
                            </div>
                            <div className='event-content'>
                                <h3>WELCOME MARKETHUB</h3>
                                <div className='event-content-text'>
                                    <p>Markethub is the our event on October 10, it's the event for bussiness, give them oppurtinity to introduce their company. And it's a oppurtinity for every student who want to join with our team.And this event is the best event in 2023 for everyone who want to have more relationship, every bussiness come into the event for this. We want to make the best environment for bussiness to find a new relationship. And maybe we will</p>
                                </div>
                                <div className='btn-more'>
                                    <p>Read more</p>
                                    <div className='btn-more-bg-color'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-event-item hidden'>
                            <div className='event-image'>
                                <img src={require('../assets/images/homepage/event-2.jpg')} alt='Loading...'></img>
                            </div>
                            <div className='event-content'>
                                <h3>TEAM CHALLENGE</h3>
                                <div className='event-content-text'>
                                    <p>Our company always build the team with the goat is make a best environment to work for our staff.
                                        There is have many games like Fantasy Ball, Board game, Sport, ... We want
                                        to make our staff hone skills like logic, teamworking, comuniaction, ... Most recently held on September 12, 2023 in Nha Trang</p>
                                </div>
                                <div className='btn-more'>
                                    <p>Read more</p>
                                    <div className='btn-more-bg-color'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-event-item hidden'>
                            <div className='event-image'>
                                <img src={require('../assets/images/homepage/event-3.jpg')} alt='Loading...'></img>
                            </div>
                            <div className='event-content'>
                                <h3>BUILD THE BEST DEVELOPER</h3>
                                <div className='event-content-text'>
                                    <p>Every year we will build the event to teach our IT team, all developers will have the oppurtinity to learn new technologies.
                                        Why we do that ? Yeah the goat is we want to ensure our products are the best for customers.
                                        But if you want to join this event you can send our your CV</p>
                                </div>
                                <div className='btn-more'>
                                    <p>Read more</p>
                                    <div className='btn-more-bg-color'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Pagination length={9}></Pagination>
                </div>

                {/* Recruitment */}
                <CareerBtn></CareerBtn>

            </div >
        </>
    )
}

export default AboutDL;