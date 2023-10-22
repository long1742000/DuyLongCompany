import '../styles/home.scss';
import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper/modules';
import FormReview from '../components/formReview';

const Home = () => {

    const [display, setDisplay] = useState('none');

    // Load data
    setTimeout(() => {
        // Counter {
        let values = document.querySelectorAll('.num');
        let interval = 1000;

        values.forEach((value) => {
            let start = 0;
            let end = parseInt(value.getAttribute('value-default'));
            let duration = Math.floor(interval / end);
            let counter = setInterval(() => {
                start += 1;
                value.textContent = start + '+';
                if (start == end) {
                    clearInterval(counter);
                }
            }, duration);
        })
        // }
    }, 200);

    // ComponentDidMount
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

        // Controller event slide {
        const contain = document.querySelector('.home-contain-event');
        const btn = document.querySelectorAll('.btn-slide');

        // Click button
        btn.forEach(icon => {
            icon.addEventListener('click', () => {
                let itemWidth = document.querySelectorAll('.home-event')[0].clientWidth;
                if (icon.id === 'left') {
                    contain.scrollLeft -= itemWidth;
                    showIcon();
                }
                else {
                    contain.scrollLeft += itemWidth;
                    showIcon();
                }
            })
        })

        // Show icon
        const showIcon = () => {
            let maxWidth = contain.scrollWidth - contain.clientWidth;
            setTimeout(() => {
                btn[0].style.display = contain.scrollLeft == 0 ? 'none' : 'block';
                btn[1].style.display = Math.round(contain.scrollLeft + 1) == maxWidth ? 'none' : 'block';
            }, 50)
        }
        // }
    }, [])

    // Click zoom image
    const zoomImage = (src) => {
        const zoom = document.getElementsByClassName('home-company-img-zoom')[0];

        if (src !== 'off') {
            const image = document.getElementById('zoomId');
            zoom.style.display = 'block';
            image.src = src;
        }
        else {
            zoom.style.display = 'none';
        }
    }

    return (
        <>
            <FormReview display={display}
                setDisplay={value => setDisplay(value)}
            ></FormReview>
            <div className="home">
                <br></br>

                {/* Greeting */}
                <div className='home-information'>
                    <h1>WELCOME TO DUYLONG</h1>
                    <p>We always want to bring you the best technology. Our team prioritizes customers, always takes the prestige as standard. We are always aiming for the latest technologies to ensure our customers are always satisfied with our services...</p>
                    <br />
                    <center>
                        <a href='#' className='read-more'>READ MORE</a>
                    </center>
                </div>

                <br />
                <hr />

                {/* Number of ... */}
                <div className='home-number'>
                    {/* Employee */}
                    <div className='home-data'>
                        <p className='icon'>
                            <i className="fa-solid fa-user-tie"></i>
                            <span className='title'>Employees</span>
                            <span className='num' value-default='150'>000+</span>
                        </p>
                    </div>
                    {/* Product */}
                    <div className='home-data'>
                        <p className='icon'>
                            <i className="fa-solid fa-box"></i>
                            <span className='title'>Products</span>
                            <span className='num' value-default='500'>000+</span>
                        </p>
                    </div>
                    {/* Contract */}
                    <div className='home-data'>
                        <p className='icon'>
                            <i className="fa-solid fa-file-signature"></i>
                            <span className='title'>Contracts</span>
                            <span className='num' value-default='1000'>0000+</span>
                        </p>
                    </div>
                    {/* Customer */}
                    <div className='home-data'>
                        <p className='icon'>
                            <i className="fa-solid fa-people-group"></i>
                            <span className='title'>Customers</span>
                            <span className='num' value-default='2000'>0000+</span>
                        </p>
                    </div>
                </div>

                <br />
                <hr />

                {/* GOATS */}
                <div className='home-company-goat'>
                    <h1>OUR MAIN GOALS</h1>
                    <div className='home-company-goat-contain'>
                        <div className='home-company-goat-item hidden'>
                            <div className='home-company-goat-content'>
                                <i className="fa-solid fa-people-roof"></i><br />
                                <span>Human resources</span>
                                <p>Building and developing human resources</p>
                                <div className='home-company-goat-content-bg'></div>
                            </div>
                        </div>
                        <div className='home-company-goat-item hidden'>
                            <div className='home-company-goat-content'>
                                <i className="fa-solid fa-briefcase"></i><br />
                                <span>Bussiness</span>
                                <p>Production and business development</p>
                                <div className='home-company-goat-content-bg'></div>
                            </div>
                        </div>
                        <div className='home-company-goat-item hidden'>
                            <div className='home-company-goat-content'>
                                <i className="fa-solid fa-robot"></i><br />
                                <span>Products</span>
                                <p>Modernize products</p>
                                <div className='home-company-goat-content-bg'></div>
                            </div>
                        </div>
                        <div className='home-company-goat-item hidden'>
                            <div className='home-company-goat-content'>
                                <i className="fa-solid fa-headset"></i><br />
                                <span>Customer care</span>
                                <p>Improve the quality of consulting services and customer care</p>
                                <div className='home-company-goat-content-bg'></div>
                            </div>
                        </div>
                        <div className='home-company-goat-item hidden'>
                            <div className='home-company-goat-content'>
                                <i className="fa-solid fa-file-shield"></i><br />
                                <span>Data management</span>
                                <p>Effective data management</p>
                                <div className='home-company-goat-content-bg'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduce */}
                <div className='home-introduce'>
                    {/* EVENTS */}
                    <div className='home-company-event'>
                        <h1 className='home-event-title hidden'>
                            EVENTS
                        </h1>

                        <div className='home-slide-event hidden'>
                            <p id='left' className='btn-slide btn-slide-left'>
                                <i className="fa-solid fa-angle-left"></i>
                            </p>
                            <p id='right' className='btn-slide btn-slide-right'>
                                <i className="fa-solid fa-angle-right"></i>
                            </p>
                            <div className='home-contain-event'>

                                <div className='home-event'>
                                    <div className='home-event-img'>
                                        <img src={require('../assets/images/homepage/event-1.jpg')} alt='Loading...'></img>
                                        <div className='home-event-img-light'></div>
                                    </div>
                                    <div className='home-event-detail'>
                                        <h2>WELCOME MARKETHUB</h2>
                                        <p>
                                            Markethub is the our event on October 10, it's the event for bussiness, give them oppurtinity to
                                            introduce their company <span className='screen-930'>. And it's a oppurtinity for every student who want to join with our team.
                                                <span className='screen-1116'>And this event is the best event in 2023 for everyone who want to have more relationship, every bussiness
                                                    come into the event for this.<span className='screen-1280'>We want to make the best environment for bussiness to find a new relationship.
                                                        And maybe we will</span></span></span> ...
                                        </p>
                                        <br />
                                        <div className='btn-more'>
                                            <p>Read more</p>
                                            <div className='btn-more-bg-color'>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='home-event'>
                                    <div className='home-event-img'>
                                        <img src={require('../assets/images/homepage/event-2.jpg')} alt='Loading...'></img>
                                        <div className='home-event-img-light'></div>
                                    </div>
                                    <div className='home-event-detail'>
                                        <h2>TEAM CHALLENGE</h2>
                                        <p>
                                            Our company always build the team with the goat is make a best environment to work for our staff.
                                            <span className='screen-930'> There is have many games like Fantasy Ball, Board game, Sport, ... We want
                                                <span className='screen-1116'>to make our staff hone skills like logic, teamworking, comuniaction, ... Most recently
                                                    <span className='screen-1280'> held on September 12, 2023 in Nha Trang</span></span></span> ...
                                        </p>
                                        <br />
                                        <div className='btn-more'>
                                            <p>Read more</p>
                                            <div className='btn-more-bg-color'>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='home-event'>
                                    <div className='home-event-img'>
                                        <img src={require('../assets/images/homepage/event-3.jpg')} alt='Loading...'></img>
                                        <div className='home-event-img-light'></div>
                                    </div>
                                    <div className='home-event-detail'>
                                        <h2>BUILD THE BEST DEVELOPER</h2>
                                        <p>
                                            Every year we will build the event to teach our IT team, all developers will have the oppurtinity to learn new technologies.
                                            <span className='screen-930'> Why we do that ? Yeah the goat is we want to ensure our products are the best for customers.
                                                <span className='screen-1116'> Our IT manager have more than 10 years experience so our developers will have a good knowledge.
                                                    <span className='screen-1280'> But if you want to join this event you can send our your CV</span></span></span> ...
                                        </p>
                                        <br />
                                        <div className='btn-more'>
                                            <p>Read more</p>
                                            <div className='btn-more-bg-color'>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* PRODUCTS ADJECTIVE */}
                    <div className='home-product-adj'>
                        <div className='adj'>
                            <i className="fa-brands fa-black-tie">
                                <span>Professional</span>
                            </i>
                        </div>
                        <div className='adj'>
                            <i className="fa-solid fa-certificate">
                                <span>Reputation</span>
                            </i>
                        </div>
                        <div className='adj'>
                            <i className="fa-regular fa-thumbs-up">
                                <span>Quality</span>
                            </i>
                        </div>
                    </div>
                    <hr></hr>

                    {/* CUSTOMER REVIEWS */}
                    <div className='home-reviews'>
                        <h1 className='title'>CUSTOMER REVIEWS</h1>

                        <div className='home-reviews-contain hidden'>

                            {/* BUTTON TO REVIEW */}
                            {localStorage.getItem('user') &&
                                <span id='btn-review' className='btn-review' onClick={() => { setDisplay('display') }}>
                                    <i className="fa-solid fa-pen-clip"></i>
                                </span>
                            }

                            {/* REVIEWS SLIDE */}
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow]}
                                className="mySwiper"
                                loop={true}
                            >
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                My love is Pham Hoang Duy Long.
                                                He so handsome and he is the good guy, he is the best with me !!!.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Ms. Anh</p>
                                                <p className='reviewer-infor-title'>Teacher</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Mr. Chi</p>
                                                <p className='reviewer-infor-title'>Operator</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Ms. Thanh</p>
                                                <p className='reviewer-infor-title'>Bussiness</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Mr. Huy</p>
                                                <p className='reviewer-infor-title'>Teacher</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Ms. Yen</p>
                                                <p className='reviewer-infor-title'>Saler</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Mr. Minh</p>
                                                <p className='reviewer-infor-title'>Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='review-item'>
                                        <div className='review-item-icon'>
                                            <img src={require('../assets/images/homepage/quote.jpg')} alt='' />
                                        </div>

                                        <div className='review-content'>
                                            <p>
                                                I really like your services, and your products is so convenient.
                                                If someone can read this review, i think you should use this services, their products is really good.
                                            </p>
                                        </div>

                                        <div className='review-reviewer'>
                                            <div className='reviewer-avatar'>
                                                <img src={require('../assets/images/homepage/user.jpg')} alt='' />
                                            </div>
                                            <div className='reviewer-infor'>
                                                <p className='reviewer-infor-name'>Mr. Tien</p>
                                                <p className='reviewer-infor-title'>Bussiness</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                    {/* COMPANY IMAGES */}
                    <div className='home-company-images'>

                        {/* MAIN IMAGE */}
                        <div className='home-company-image-1'>

                            {/* COMPANY MAXIM */}
                            <div className='home-company-maxim hidden'>
                                <p>
                                    "Technology always develops day by day.<br /> Try to develop in parallel with it."
                                    <span>Mr. Duy Long</span>
                                </p>
                            </div>
                            <div className='home-company-main-img hidden'>
                                <img src={require('../assets/images/homepage/technology.jpg')} alt='Loading...' />
                                <div className='home-company-img-light'></div>
                            </div>
                        </div>

                        {/* LIST IMAGE */}
                        <div className='home-company-image-2'>
                            <div className='home-company-img-1'>
                                <div className='home-company-img-item hidden'>
                                    <img onClick={() => { zoomImage(require('../assets/images/homepage/company1.jpg')) }} src={require('../assets/images/homepage/company1.jpg')} alt='Loading...'></img>
                                    <div className='home-company-img-light'></div>
                                </div>
                                <div className='home-company-img-item hidden'>
                                    <img onClick={() => { zoomImage(require('../assets/images/homepage/company2.jpg')) }} src={require('../assets/images/homepage/company2.jpg')} alt='Loading...'></img>
                                    <div className='home-company-img-light'></div>
                                </div>
                            </div>
                            <div className='home-company-img-1'>
                                <div className='home-company-img-item hidden'>
                                    <img onClick={() => { zoomImage(require('../assets/images/homepage/company3.jpg')) }} src={require('../assets/images/homepage/company3.jpg')} alt='Loading...'></img>
                                    <div className='home-company-img-light'></div>
                                </div>
                                <div className='home-company-img-item hidden'>
                                    <img onClick={() => { zoomImage(require('../assets/images/homepage/company4.jpg')) }} src={require('../assets/images/homepage/company4.jpg')} alt='Loading...'></img>
                                    <div className='home-company-img-light'></div>
                                </div>
                            </div>
                        </div>

                        {/* ZOOM IMAGE */}
                        <div className='home-company-img-zoom'>
                            <div className='img-zoom-contain'>
                                <img id='zoomId' alt='Loading...'></img>
                            </div>
                            <div onClick={() => { zoomImage('off') }} className='zoom-bg'></div>
                        </div>
                    </div>
                </div>

                {/* Partners */}
                <div className='home-company-partners'>
                    <h1>OUR PARTNERS</h1>

                    <div className='company-partner-contain'>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-google"></i>
                                <span className='partner-name'>Google</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-square-facebook"></i>
                                <span className='partner-name'>Facebook</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-tiktok"></i>
                                <span className='partner-name'>Tiktok</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-instagram"></i>
                                <span className='partner-name'>Instagram</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-twitter"></i>
                                <span className='partner-name'>Twitter</span>
                            </div>
                        </div>
                    </div>

                    <div className='company-partner-contain'>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-android"></i>
                                <span className='partner-name'>Android</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-apple"></i>
                                <span className='partner-name'>Apple</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-youtube"></i>
                                <span className='partner-name'>Youtube</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-steam"></i>
                                <span className='partner-name'>Steam</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-discord"></i>
                                <span className='partner-name'>Discord</span>
                            </div>
                        </div>
                    </div>

                    <div className='company-partner-contain'>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-soundcloud"></i>
                                <span className='partner-name'>Soundcloud</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-spotify"></i>
                                <span className='partner-name'>Spotify</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-microsoft"></i>
                                <span className='partner-name'>Microsoft</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-unity"></i>
                                <span className='partner-name'>Unity</span>
                            </div>
                        </div>
                        <div className='company-partner-item hidden'>
                            <div className='partner-item-bg'>
                                <i className="fa-brands fa-viber"></i>
                                <span className='partner-name'>Viber</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;