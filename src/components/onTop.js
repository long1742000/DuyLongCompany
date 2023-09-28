import '../styles/ontop.scss';

setTimeout(() => {
    const toTop = document.getElementsByClassName('onTop')[0];

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.style.bottom = '10px';
        }
        else {
            toTop.style.bottom = '-50px';
        }
    })

    toTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}, 500);

export const OnTop = () => {
    return (
        <div className='onTop'>
            <i className="fa-solid fa-chevron-up"></i>
        </div>
    )
}