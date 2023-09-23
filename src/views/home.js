import { useNavigate } from 'react-router';
import '../styles/home.scss';
import { useEffect } from 'react';
import { checkLogin } from '../common/userController';
import store from '../redux/store/store';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="home">
                <div className='information'>

                </div>
            </div>
        </>
    )
}

export default Home;