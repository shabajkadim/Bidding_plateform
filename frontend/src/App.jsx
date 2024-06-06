import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AddProduct from './components/pages/AddProduct';
import GetProduct from './components/pages/GetProduct';
import { Navbar } from './components/navbar/Navbar';
import Rules from './components/pages/Rules';
import LiveBids from './components/pages/LiveBids';
import Notification from './components/pages/Notification';
import Addcart from './components/pages/Addcart';
import UploadProduct from './components/pages/UploadProduct';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/getproduct' element={<GetProduct/>} />
        <Route path='/rules' element={<Rules/>} />
        <Route path='/live-bids' element={<LiveBids/>} />
        <Route  path='/notification' element={<Notification/>}/>
        <Route path='/add-cart' element={<Addcart/>} />
        <Route path='/upload-Product' element={<UploadProduct/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
