import './App.css';
import './styles/background.scss';
import Navbar from './components/navbar';
import Home from './views/home';
import Login from './views/login';
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';
import { OnTop } from './components/onTop';
import store from './redux/store/store';
import { useEffect, useState } from 'react';
import Toast from './components/toast';
import Alert from './components/alert';
import Footer from './components/footer';
import PageTitle from './components/pageTitle';
import Icon from './data/icon';
import Recommend from './components/recommend';
import AboutDL from './views/aboutDL';
import Career from './views/career';

function App() {

  const [reduxState, setReduxState] = useState(store.getState());

  // Check redux state changed function
  const checkChanged = () => {

    // Using setInterval to check redux state every 0.5s
    setInterval(() => {
      // If redux state changed
      if (reduxState !== store.getState()) {
        setReduxState(store.getState())
      }
    }, 500)
  }

  // ComponentDidUpdate
  useEffect(() => {
    checkChanged();
  }, [reduxState])

  return (
    <div className='dad'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={
          <div className='background'>

            {/* Page title (title - category - icon) */}
            <PageTitle
              title='Home page'
              icon={Icon.home}
            ></PageTitle>

            {/* Recommend */}
            <Recommend></Recommend>

            <div className='content'>

              {/* ------Content------ */}
              <Home></Home>

            </div>

            <div className='decoreX'></div>
            <div className='decoreY'></div>
            <div className='decoreZ'></div>
          </div>
        } />
        <Route path="/about" element={
          <div className='background'>

            {/* Page title (title - category - icon) */}
            <PageTitle
              title='About Us'
              icon={Icon.company}
            ></PageTitle>

            <div className='content'>

              {/* ------Content------ */}
              <AboutDL></AboutDL>

            </div>

            <div className='decoreX'></div>
            <div className='decoreY'></div>
            <div className='decoreZ'></div>
          </div>
        } />
        <Route path="/career" element={
          <div className='background'>

            {/* Page title (title - category - icon) */}
            <PageTitle
              title='Careers'
              icon={Icon.briefcase}
            ></PageTitle>

            <div className='content'>

              {/* ------Content------ */}
              <Career></Career>

            </div>

            <div className='decoreX'></div>
            <div className='decoreY'></div>
            <div className='decoreZ'></div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer></Footer>

      <OnTop></OnTop>
      <Contact></Contact>
      <Toast toast={reduxState.toast}></Toast>
      <Alert alert={reduxState.alert}></Alert>
    </div >
  );
}

export default App;
