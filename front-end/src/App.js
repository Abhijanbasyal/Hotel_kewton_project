
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
// import {Home} from './pages/Home';
import {Aboutus} from './pages/Aboutus';
import {Blog} from './pages/Blog';
import {Contactus} from './pages/Contactus';
import {Loginpg} from './pages/Loginpg';
import {Registration} from './pages/Registration';


function App() {
  return (
    <div >
      <div className='bg-img '></div>
      <BrowserRouter>
        <Navbar />
        <div className='absolute '>

          <Routes>
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/login' element={<Loginpg />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
 
    </div>
  );
};

export default App; 
