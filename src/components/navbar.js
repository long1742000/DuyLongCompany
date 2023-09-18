import { useState } from 'react';
import '../styles/navbar.scss';

const Navbar = () => {

    const [keyword, setKeyword] = useState('');

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

    return (
        <>
            <div className="navbar">
                {/* LOGO */}
                <div className="logo">
                    <img src={require('../assets/images/logo.png')}></img>
                </div>

                {/* TOGGLE */}
                <div className="toggle" onClick={() => { toggle() }}>
                    <i class="fa-solid fa-chevron-left"></i>
                </div>

                {/* MENU */}
                <div className='menu'>
                    {/* TURN OFF */}
                    <a className='turn-off' onClick={() => { toggle() }}>
                        <i class="fa-solid fa-square-xmark"></i>
                    </a>

                    <br></br>

                    <h1>LEARN ENGLISH</h1>
                    <p className='hello'>Hello Long, what do you want to do today ?</p>
                    <hr></hr>

                    {/* MENU LIST */}
                    <ul>
                        <li onClick={() => { search() }}>
                            <a>Search new word</a>
                            <div className='icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>Gramma</a>
                            <div className='icon'>
                                <i className="fa-solid fa-spell-check"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>Vocabulary</a>
                            <div className='icon'>
                                <i class="fa-solid fa-book"></i>
                            </div>
                        </li>
                        <li>
                            <a href='#'>Irregular Verbs</a>
                            <div className='icon'>
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                        </li>
                    </ul>

                    <ul className='sign-out'>
                        <li>
                            <a href='#'>Sign out</a>
                            <div className='icon'>
                                <i class="fa-solid fa-right-from-bracket"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* SEARCH BAR */}
            <div className='search'>
                <div className='searchBar'>
                    <input type='text' placeholder='Type you word...' onChange={(e) => { setKeyword(e.target.value) }}></input>
                    <a href={keyword !== '' ? `https://www.ldoceonline.com/dictionary/${keyword}` : '#'} target={keyword !== '' ? `_blank` : '_self'}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
                <div className='turn-off' onClick={() => { search() }}>
                    <i class="fa-solid fa-x"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar;