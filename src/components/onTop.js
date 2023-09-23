import '../styles/ontop.scss';

setTimeout(() => {
    const toTop = document.getElementsByClassName('onTop')[0];

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('display');
        }
        else {
            toTop.classList.remove('display');
        }
    })

    toTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}, 500);

export const OnTop = () => {
    return (
        <div className='onTop display'>
            <i className="fa-solid fa-chevron-up"></i>
        </div>
    )
}