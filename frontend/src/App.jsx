import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import AddProduct from './components/pages/AddProduct';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
