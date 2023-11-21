import '../styles/career.scss';
import { click } from '../common/toastController';
import Icon from '../data/icon';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import positions from '../data/positions';
import { useEffect } from 'react';
import { turnOn } from '../redux/actions/alertAction';
import { useDispatch } from 'react-redux';

const Career = () => {

    // States
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [selected, setSelected] = useState('');
    const [experience, setExperience] = useState('');
    const [detail, setDetail] = useState('');
    const [uploaded, setUploaded] = useState('Upload your CV');

    // Dispatch state
    const dispatch = useDispatch();

    // componentDidMount
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

        // Controller display animation of welcome icon {
        setTimeout(() => {
            const welcomeText = document.getElementsByClassName('welcome-text')[0];
            welcomeText.classList.add('display');
        }, 500)
        // }
    }, []);

    // Copy text function
    const copyText = () => {
        const copy = document.getElementById('copy-text').innerText;

        let inputElement = document.createElement('input');
        inputElement.setAttribute('value', copy);
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        inputElement.parentNode.removeChild(inputElement);

        click(Icon.copied, 'Copied');
    }

    // Control welcome text
    const controlText = () => {
        const welcomeText = document.getElementsByClassName('welcome-text')[0];
        welcomeText.classList.toggle('display');
    }

    // Turn off welcome icon
    const turnOff = () => {
        const welcomeIcon = document.getElementsByClassName('welcome-icon')[0];
        welcomeIcon.classList.add('turnOff');
    }

    // click send
    const clickSend = () => {
        if (fullName === '' || email === '' || selected === '' || experience === '' || detail === '') {
            click(Icon.infor, 'Please type all information !!!');
        }
        else if (uploaded === 'Upload your CV') {
            click(Icon.infor, 'Please upload your CV file !!!');
        }
        else if (!email.includes('@')) {
            click(Icon.infor, 'Your email is wrong !!!');
        }
        else if (!uploaded.includes('.pdf') && !uploaded.includes('.docx')) {
            click(Icon.infor, 'Please upload .pdf or .docx file !!!');
        }
        else {
            click(Icon.waiting, 'Waiting')

            setTimeout(() => {
                // Success
                dispatch(turnOn('We will record your CV, within 2 days we will proactively send the results to you.', '', '', ''));
            }, 3000)
        }
    }

    return (
        <>
            <div className='career'>
                {/* Introduce */}
                <h1>JOIN OUR TEAM</h1>
                <p>We are very happy with your decision, we want to cooperate with you in the future. And with confidence with your skills we believe that you will help our development. To repay with these contributions, we commit to you that you will provide you with the best working environment, the best benefits for your development. To join our team, you are forced to overcome the stages:</p>

                {/* Career stages */}
                <div className='career-stages'>
                    <div className='stage-item'>
                        <div className='state-image'>
                            <img src={require('../assets/images/career/check-cv.png')} alt='Loading...'></img>
                        </div>
                        <div className='state-content hidden'>
                            <p className='state-content-title'>1. Send us your CV</p>
                            <p>
                                The first thing is that candidates need to send us the candidate's CV so that we can see the basic information and skills of the candidate, check if it is suitable for the candidate's position.
                                So to send CV candidates please send via email of Human Resources Department: <strong id='copy-text' onClick={() => { copyText() }}>hrduylong@gmail.com</strong> or fill in the <HashLink to={'/career#form'}>form</HashLink>. This step can take 1-2 days.
                            </p>
                        </div>
                    </div>

                    <div className='stage-item even'>
                        <div className='state-image'>
                            <img src={require('../assets/images/career/interview.png')} alt='Loading...'></img>
                        </div>
                        <div className='state-content hidden'>
                            <p className='state-content-title'>2. Check your knowledge</p>
                            <p>
                                After we have seen your basic information and skills. We need to confirm those things are true in the form of direct interview with you. And people who have expertise and long experience will interview directly to determine whether you are suitable for the job. This step can take 3-5 days.
                            </p>
                        </div>
                    </div>

                    <div className='stage-item'>
                        <div className='state-image'>
                            <img src={require('../assets/images/career/salary.png')} alt='Loading...'></img>
                        </div>
                        <div className='state-content hidden'>
                            <p className='state-content-title'>3. Your wishes and plans at work</p>
                            <p>
                                After you have confirmed your skill is suitable for the job. We will come to phase 3 is to hear your wishes and plans to confirm that you are sincere with the company, or the salary, position you want.
                            </p>
                        </div>
                    </div>

                    <div className='stage-item even'>
                        <div className='state-image'>
                            <img src={require('../assets/images/career/contract.avif')} alt='Loading...'></img>
                        </div>
                        <div className='state-content hidden'>
                            <p className='state-content-title'>4. Signing contracts, supplementing the missing papers</p>
                            <p>
                                And the last step, after we confirm that you are the candidate we are looking for. You will sign a contract to become an official employee and add the missing papers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* WELCOME TEXT */}
                <div className='welcome-icon'>
                    <span onClick={() => { turnOff() }} className='btn-x'><i className="fa-solid fa-xmark"></i></span>
                    <img onClick={() => { controlText() }} src={require('../assets/images/aboutUspage/leader-1.jpg')} alt='Loading...'></img>

                    <div className='welcome-text'>
                        <p>Welcome to our team, we will help you become the perfect person</p>
                    </div>
                </div>

                <br />

                {/* Application form */}
                <div id="form" className='career-form'>
                    <br />
                    <h1>APPLICATION FORM</h1>

                    <div className='app-form'>
                        <div className='form-input input-name'>
                            <input onChange={(e) => { setFullName(e.target.value) }} name='name' type='text' autoComplete="off" required></input>
                            <span to='name'>Full name</span>
                        </div>

                        <div className='form-input input-name'>
                            <input onChange={(e) => { setEmail(e.target.value) }} name='email' type='text' autoComplete="off" required></input>
                            <span to='email'>Email</span>
                        </div>

                        <div className='form-input'>
                            <div className='input-position'>
                                <div className={selected === '' ? 'input' : 'input selected'}>
                                    <span className='input-title'>Position</span>
                                    <span className='input-arrow'><i className="fa-solid fa-caret-left"></i></span>
                                    <p className='input-value'>{selected}</p>
                                    <div className='choose-position'>
                                        <p onClick={() => { setSelected('') }}>Nope</p>
                                        {positions.map((item) => {
                                            return (
                                                <p key={item.id} onClick={() => { setSelected(item.name) }}>{item.name}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className='input-experience'>
                                <input onChange={(e) => { setExperience(e.target.value) }} name='experience' type='text' autoComplete="off" required></input>
                                <span to='experience'>Experience</span>
                            </div>
                        </div>

                        <div className='form-input input-detail'>
                            <textarea onChange={(e) => { setDetail(e.target.value) }} name='detail' type='text' required></textarea>
                            <span to='detail'>Introduce yourself</span>
                        </div>

                        <div className='form-input input-file'>
                            <input className='cv' name='cv' type='text' value={uploaded} readOnly></input>
                            <input onChange={(e) => { setUploaded(e.target.value); }} id="upload-file" type='file' hidden></input>
                            <label htmlFor='upload-file'><i className="fa-solid fa-download"></i></label>
                        </div>

                        <div className='btn-send'>
                            <div onClick={() => { clickSend() }} className='btn'>
                                <p>SEND</p>
                                <div className='btn-bg'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career;