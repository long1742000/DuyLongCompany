import { useState } from 'react';
import '../styles/navbar.scss';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/accountAction';

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
        const menu = document.getElementsByClassName('menu')[0];
        menu.classList.toggle('turn-on');
    }

    // Control search bar
    const search = () => {
        const search = document.getElementsByClassName('search')[0];
        search.classList.toggle('turn-on');
    }

    // Logout
    const clickSignOut = () => {
        dispatch(logout(JSON.parse(localStorage.getItem('account'))));
        navigate('/login');
    }

    return (
        <>
            <div className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <img src={require('../assets/images/logo.png')} alt='Loading...'></img>
                </div>

                {/* TOGGLE */}
                <div className="toggle" onClick={() => { toggle() }}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>

                {/* MENU */}
                <div className='menu'>
                    {/* TURN OFF */}
                    <a className='turn-off' onClick={() => { toggle() }}>
                        <i className="fa-solid fa-square-xmark"></i>
                    </a>

                    <br></br>

                    <h1>SERVICES</h1>
                    <p className='hello'>Hello {user.lastname}, what do you want us to do ?</p>
                    <hr></hr>

                    {/* MENU LIST */}
                    <ul>
                        <li onClick={() => { search() }}>
                            <a>Search service</a>
                            <div className='icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>About Front End</a>
                            <div className='icon'>
                                <i className="fa-solid fa-code"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>About Back End</a>
                            <div className='icon'>
                                <i className="fa-solid fa-gears"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>Database design</a>
                            <div className='icon'>
                                <i className="fa-solid fa-database"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>Fullstack</a>
                            <div className='icon'>
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                        </li>
                    </ul>

                    <ul className='sign-out'>
                        <li>
                            <a onClick={() => { clickSignOut() }}>Sign out</a>
                            <div className='icon'>
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </div>
                        </li>
                    </ul>
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
    )
}

export default Navbar;