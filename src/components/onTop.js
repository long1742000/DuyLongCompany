import '../styles/ontop.scss';

// Wait 0.5s to get element
setTimeout(() => {
    const toTop = document.getElementsByClassName('onTop')[0];

    // Event scroll
    window.addEventListener('scroll', () => {
        // If user scroll down window > 100px 
        if (window.pageYOffset > 100) {
            toTop.style.bottom = '10px';
        }
        else {
            toTop.style.bottom = '-50px';
        }
    })

    // If user click back to top
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