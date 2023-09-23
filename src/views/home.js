import { useNavigate } from 'react-router';
import '../styles/home.scss';
import { useEffect } from 'react';
import { checkLogin } from '../common/userController';
import store from '../redux/store/store';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!checkLogin()) {
            navigate('/login');
        }
        else {
            console.log('user: ', store.getState('acc'));
        }
    }, [store.getState('acc')])

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