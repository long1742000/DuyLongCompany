import { useState } from 'react';
import '../styles/recommend.scss';
import { recommend } from '../data/recommend';
import { useEffect } from 'react';

const Recommend = () => {

    // States
    const [item, setItem] = useState(0);
    const [next, setNext] = useState('ltr');

    // ComponentDidUpdate
    useEffect(() => {
        setTimeout(() => {

            if (next === 'ltr') {
                if (item < 2) {
                    changeRecommend(1);
                }
                else {
                    setNext('rtl');
                }
            }
            else {
                if (item > 0) {
                    changeRecommend(-1);
                }
                else {
                    setNext('ltr');
                }
            }
        }, 5000)
    }, [item, next])

    // Function change recommend
    const changeRecommend = (index) => {
        const content = document.getElementsByClassName('recommend-content')[0];
        content.style.opacity = 0;

        setTimeout(() => {
            setItem(item + index);
            content.style.opacity = 1;
        }, 1000);
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