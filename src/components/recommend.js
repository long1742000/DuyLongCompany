import { useState } from 'react';
import '../styles/recommend.scss';
import { recommend } from '../data/recommend';
import { useEffect } from 'react';

const Recommend = () => {

    // States
    const [item, setItem] = useState(0);
    const [next, setNext] = useState('ltr');
    const [time, setTime] = useState(5000);

    // ComponentDidUpdate
    useEffect(() => {

        // Set time to change the recommend
        setTimeout(() => {

            // If next is ltr => left to right => recommend 1 > recommend 2 > recommend 3
            if (next === 'ltr') {
                if (item < 2) {             // If item = 1 or 0
                    changeRecommend(1);
                }
                else {                      // If item = 2 => change next to right to left
                    setNext('rtl');
                }
            }
            // If next is rtl => right to left => recommend 1 < recommend 2 < recommend 3
            else {
                if (item > 0) {
                    changeRecommend(-1);
                }
                else {
                    setNext('ltr');
                }
            }
        }, time)
    }, [item, next])

    // Function change recommend
    const changeRecommend = (index) => {
        // This function only run when user in homepage
        if (window.location.pathname === '/') {
            const content = document.getElementsByClassName('recommend-content')[0];
            content.style.opacity = 0;
            setTime(5000);

            setTimeout(() => {
                setItem(item + index);
                content.style.opacity = 1;
            }, 1000);
        }
    }

    return (
        <div className="recommend">
            <div className='recommend-contain'>
                {/* Turn left */}
                <div onClick={item > 0 ? () => { changeRecommend(-1) } : () => { changeRecommend(0) }} className='btn-turn recommend-left'>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>

                {/* Content */}
                <div className='recommend-content'>

                    <div className='recommend-title'>
                        <p>{recommend[item].title} :</p>
                    </div>

                    <div className='recommend-text'>
                        <p>{recommend[item].text}</p>
                    </div>

                    {/* Button read more */}
                    <div className='btn-more'>
                        <p>READ</p>
                        <div className='btn-more-bg-color'>

                        </div>
                    </div>
                </div>

                {/* Turn right */}
                <div onClick={item < 2 ? () => { changeRecommend(1) } : () => { changeRecommend(0) }} className='btn-turn recommend-right'>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Recommend;