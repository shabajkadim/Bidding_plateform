import React from 'react'
import '../style/navbar.css'
import { Link} from 'react-router-dom'

export const Navbar = () => {

  return (
    <div className='navbar-main'>
        <div>
          <Link to={'/'} ><img className='w-h100' src='https://www.logoground.com/uploads12/dv12y2023510712023-12-194852706K%20Diamond.jpg' /></Link>
        </div>
        <div>
        <div >
          <Link to={'/rules'}>Rules & Regulation</Link>
        </div>
        
          <div >
            <Link to={'/live-bids'}>Live Bids</Link>
          </div>
        </div>

        <div>
          <div>
            <Link to={'/notification'}><i class="fa-solid fa-bell"></i></Link>
          </div>
          <div>
            <Link to={'/add-cart'}><i class="fa-solid fa-cart-shopping"></i></Link>
          </div>
          <div>
            <Link to={'/register'}>
            <i class="fa-solid fa-user"></i></Link>
          </div>
        </div>
      </div>
  )
}

 
