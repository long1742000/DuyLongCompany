import './App.css';
import './styles/background.scss';
import Navbar from './components/navbar';
import Home from './views/home';
import Login from './views/login';

function App() {
  return (
    <div className='background'>
      <Navbar></Navbar>
      {/* <Login></Login> */}
      <Home></Home>

      <div className='decore1'></div>
      <div className='decore2'></div>
      <div className='decore3'></div>
    </div>
  );
}

export default App;
