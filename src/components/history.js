import { useEffect } from 'react';
import '../styles/history.scss';

const History = () => {

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

    return (
        <>
            <div id='history' className='about-history'>
                <h1>HISTORY</h1>
                <div className='about-history-contain hidden'>
                    <i className="fa-solid fa-person-walking">
                        <p className='history-title'>Mr.Long</p>
                        <div className='history-content'>
                            <p>Mr.Long had a dream to build the technology company.</p>
                        </div>
                    </i>
                    <i className="fa-regular fa-circle-dot one">
                        <p className='history-title'>2019</p>
                        <div className='history-content'>
                            <p>He was starting to build his dream.</p>
                        </div>
                    </i>
                    <i className="fa-regular fa-circle-dot two">
                        <p className='history-title'>2022</p>
                        <div className='history-content'>
                            <p>He applied to CTG, and this was a first step in his dream.</p>
                        </div>
                    </i>
                    <i className="fa-solid fa-people-group">
                        <p className='history-title'>Dai, Long, Tran</p>
                        <div className='history-content'>
                            <p>He met Mr.Dai and Mr.Tran, they were having same dream. So they devided to building together.</p>
                        </div>
                    </i>
                    <i className="fa-regular fa-circle-dot three">
                        <p className='history-title'>2030</p>
                        <div className='history-content'>
                            <p>In the future</p>
                        </div>
                    </i>
                    <i className="fa-regular fa-circle-dot four">
                        <p className='history-title'>2037</p>
                        <div className='history-content'>
                            <p>In the future</p>
                        </div>
                    </i>
                    <i className="fa-solid fa-building">
                        <p className='history-title'>DL company</p>
                        <div className='history-content'>
                            <p>The dream has come true. And the company is developing.</p>
                        </div>
                    </i>
                </div>
            </div>
        </>
    )
}

export default History;