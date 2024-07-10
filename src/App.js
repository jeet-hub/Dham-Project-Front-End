import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import TopNavbar from './TopNavbar';
import Booking from './Pages/Booking/Booking';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

function App() {
  return (
    <>
    <Router>
    <TopNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
      <Footer/>
      <div className='MobileMenu'>
         <MobileMenu/>
      </div>
    </Router>   
    </>
  );
}

export default App;

