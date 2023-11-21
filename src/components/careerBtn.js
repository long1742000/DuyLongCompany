import { useState } from 'react'
import '../styles/aboutDL.scss'
import { HashLink } from 'react-router-hash-link';

const CareerBtn = () => {

    // State control question button
    const [turn, setTurn] = useState(true);

    // Wait 0.5s to get element
    setTimeout(() => {
        const question = document.getElementsByClassName('question')[0];

        // Event scroll
        window.addEventListener('scroll', () => {
            // If user scroll down window > 1000px 
            if (window.pageYOffset > 1000) {
                question.classList.add('turnOn');
                setTurn(false);
            }
            else {
                question.classList.remove('turnOn');
            }
        })
    }, 500);

    // Turn on or turn off
    const turnOff = () => {
        setTurn(!turn);
        const question = document.getElementsByClassName('question')[0];
        if (turn) {
            question.style.transform = 'scale(100%)';
            question.style.right = '70px';
        }
        else {
            question.style.transform = 'scale(0)';
            question.style.right = '0';
        }
    }

    return (
        <>
            <div className='question-btn'>
                <span className='careers-btn' onClick={() => { turnOff() }}>
                    <i className="fa-regular fa-comment-dots"></i>
                </span>

                <div className='question'>
                    <HashLink to={`/career#header`}>Join our team ?</HashLink>
                </div>
            </div>
        </>
    )
}

export default CareerBtn;