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
      </Routes>
    </div>
  );
}

export default App;
