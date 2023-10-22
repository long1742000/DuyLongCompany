import { useEffect, useState } from 'react';
import '../styles/navbar.scss';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { turnOn } from '../redux/actions/alertAction';
import Icon from '../data/icon.js';
import { click } from '../common/toastController';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    // Get user account
    const user = JSON.parse(localStorage.getItem('user'));

    // State
    const [keyword, setKeyword] = useState('');

    // Navigate
    const navigate = useNavigate();

    // Redux hook
    const dispatch = useDispatch();

    // Control menu
    const toggle = () => {
        const menu = document.getElementsByClassName('navbar')[0];
        menu.classList.toggle('turn-on');
    }

    // Control search bar
    const search = () => {
        const search = document.getElementsByClassName('search')[0];
        search.classList.toggle('turn-on');
    }

    // Ask customers to log in
    const signInPlease = () => {
        click(Icon.infor, 'Sign in to use it');
    }

    // Logout
    const clickSignOut = () => {
        dispatch(turnOn('If you sign out, you cannot use our services. Continue ?', 'Sign out', 'logout', 'fa-solid fa-right-from-bracket'));
    }

    // componentDidUpdate
    useEffect(() => {
        if (user) {

        }
    }, [])

    return (
        <>
            {
                window.location.pathname !== '/login' &&
                <>
                    <div className="navbar">
                        {/* LOGO */}
                        <div className="logo">
                            <img onClick={() => { navigate('/') }} src={require('../assets/images/logo.png')} alt='Loading...'></img>
                        </div>

                        {/* TOGGLE */}
                        <div className="toggle" onClick={() => { toggle() }}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>

                        {/* MENU */}
                        <div className='outside-menu' onClick={() => { toggle() }}></div>

                        <div className='menu'>
                            {/* TURN OFF */}
                            <a className='turn-off' onClick={() => { toggle() }}>
                                <i className="fa-solid fa-square-xmark"></i>
                            </a>

                            <br></br>

                            <h1>SERVICES</h1>
                            {user &&
                                <p className='hello'>Hello {user.lastname}, what do you want us to do ?</p>
                            }
                            {!user &&
                                <HashLink to={'/login#header'} className='hello'>Hello guest, sign in to use our services?</HashLink>
                            }
                            <hr></hr>

                            {/* MENU LIST */}
                            <ul>
                                <a className={user ? '' : 'guest'}>
                                    <li onClick={user ? () => { search() } : () => { signInPlease() }}>
                                        Search service
                                        <div className='icon'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </li>
                                </a>
                                <a className={user ? '' : 'guest'} href='#'>
                                    <li>
                                        About Hosting/Domain
                                        <div className='icon'>
                                            <i className="fa-solid fa-server"></i>
                                        </div>
                                    </li>
                                </a>
                                <a className={user ? '' : 'guest'} href='#'>
                                    <li>
                                        About Front End
                                        <div className='icon'>
                                            <i className="fa-solid fa-code"></i>
                                        </div>
                                    </li>
                                </a>
                                <a className={user ? '' : 'guest'} href='#'>
                                    <li>
                                        About Back End
                                        <div className='icon'>
                                            <i className="fa-solid fa-gears"></i>
                                        </div>
                                    </li>
                                </a>
                                <a className={user ? '' : 'guest'} href='#'>
                                    <li>
                                        Database design
                                        <div className='icon'>
                                            <i className="fa-solid fa-database"></i>
                                        </div>
                                    </li>
                                </a>
                                <a className={user ? '' : 'guest'} href='#'>
                                    <li>
                                        Fullstack
                                        <div className='icon'>
                                            <i className="fa-solid fa-layer-group"></i>
                                        </div>
                                    </li>
                                </a>
                            </ul>

                            <p className='hello'>Or do you want to learn about us ?</p>
                            <hr></hr>

                            <ul>
                                <HashLink smooth to='/about/#header'>
                                    <li>
                                        About DL
                                        <div className='icon'>
                                            <i className="fa-solid fa-building"></i>
                                        </div>
                                    </li>
                                </HashLink>
                                <HashLink smooth to='/about/#history'>
                                    <li>
                                        Our history
                                        <div className='icon'>
                                            <i className="fa-solid fa-book-bookmark"></i>
                                        </div>
                                    </li>
                                </HashLink>
                                <HashLink smooth to='/about/#event'>
                                    <li>
                                        Our events
                                        <div className='icon'>
                                            <i className="fa-solid fa-calendar-check"></i>
                                        </div>
                                    </li>
                                </HashLink>
                            </ul>

                            {localStorage.getItem('user') &&
                                <>
                                    <hr></hr>

                                    <ul className='sign-out'>
                                        <a onClick={() => { clickSignOut() }}>
                                            <li>
                                                Sign out
                                                <div className='icon'>
                                                    <i className="fa-solid fa-right-from-bracket"></i>
                                                </div>
                                            </li>
                                        </a>
                                    </ul>
                                </>
                            }
                        </div>

                    </div>

                    {/* SEARCH BAR */}
                    <div className='search'>
                        <div className='searchBar'>
                            <input type='text' placeholder='Type here...' onChange={(e) => { setKeyword(e.target.value) }}></input>
                            <a href={keyword !== '' ? `${keyword}` : '#'} target={keyword !== '' ? `_blank` : '_self'}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </div>
                        <div className='turn-off' onClick={() => { search() }}>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Navbar;