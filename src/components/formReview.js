import { useEffect, useState } from 'react';
import '../styles/formReview.scss';
import { click } from '../common/toastController';
import { useDispatch } from 'react-redux';
import Icon from '../data/icon';
import { turnOn } from '../redux/actions/alertAction';

const FormReview = (props) => {

    // States
    const [text, setText] = useState('');
    const [color, setColor] = useState('');
    const [type, setType] = useState('');
    const [num, setNum] = useState('');

    // Redux hook
    const dispatch = useDispatch();

    // componentDidUpdate
    useEffect(() => {
        const form = document.getElementsByClassName('formReview')[0];
        checkRate();
        if (props.display == 'display') {
            form.classList.add('display');
        }
        else {
            form.classList.remove('display');
        }
    }, [props])

    // Turn off
    const turnOff = () => {
        props.setDisplay('none');
    }

    // Check user already rate
    const checkRate = () => {
        const radio = document.getElementsByClassName(`radio`);

        for (let i = 0; i < 5; i++) {
            if (radio[i].checked) {
                return true;
            }
        }
        return false;
    }

    // Click Post
    const post = () => {
        if (!checkRate()) {
            click(Icon.danger, 'Please evaluate !!!');
        }
        else if (type === '') {
            click(Icon.danger, 'Please write the reason !!!');
        }
        else {
            click(Icon.waiting, 'Waiting')

            setTimeout(() => {
                // Success
                dispatch(turnOn('Thank you for your comments for our company to develop more.', '', '', ''));
                const radio = document.getElementById(`rate-${num}`);
                const textarea = document.getElementsByClassName('textarea')[0];
                textarea.value = '';
                radio.checked = false;
                setText('');
                setType('');
            }, 3000)
        }
    }

    return (
        <>
            <div className="formReview">
                <i onClick={() => { turnOff() }} className="fa-solid fa-xmark turnOff"></i>
                <div className='formReview-rating'>
                    <input className='radio' type='radio' name='rate' id='rate-5' hidden></input>
                    <label onClick={() => { setText('I really like your company'); setColor('green'); setNum(5) }} htmlFor='rate-5'><i className="fa-solid fa-star"></i></label>
                    <input className='radio' type='radio' name='rate' id='rate-4' hidden></input>
                    <label onClick={() => { setText('I like your company'); setColor('rgb(0, 206, 0)'); setNum(4) }} htmlFor='rate-4'><i className="fa-solid fa-star"></i></label>
                    <input className='radio' type='radio' name='rate' id='rate-3' hidden></input>
                    <label onClick={() => { setText(`I think your company is good`); setColor('rgb(200, 203, 28)'); setNum(3) }} htmlFor='rate-3'><i className="fa-solid fa-star"></i></label>
                    <input className='radio' type='radio' name='rate' id='rate-2' hidden></input>
                    <label onClick={() => { setText(`I don't like your company`); setColor('orange'); setNum(2) }} htmlFor='rate-2'><i className="fa-solid fa-star"></i></label>
                    <input className='radio' type='radio' name='rate' id='rate-1' hidden></input>
                    <label onClick={() => { setText('I just hate your company'); setColor('red'); setNum(1) }} htmlFor='rate-1'><i className="fa-solid fa-star"></i></label>
                </div>
                <div className='formReview-text'>
                    <p style={{ color: color }}>{text}</p>
                    <textarea className='textarea' onChange={(e) => { setType(e.target.value) }} maxLength={300} spellCheck='false' placeholder='Write your thoughts about us...'></textarea>
                </div>
                <div className='formReview-send'>
                    <p onClick={() => { post() }}>POST</p>
                </div>
            </div>
        </>
    )
}

export default FormReview;