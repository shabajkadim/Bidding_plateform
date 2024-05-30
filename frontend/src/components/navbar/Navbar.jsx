import React from 'react'
import '../style/navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const router=useNavigate()

  function handleClick(){
    router('/rules')

  }

  function handleOnClick(){
    router('/live-bids')
  }




  return (
    <div className='navbar-main'>
        <div>
          <Link to={'/'} ><img className='w-h100' src='https://www.logoground.com/uploads12/dv12y2023510712023-12-194852706K%20Diamond.jpg' /></Link>
        </div>
        <div>
        <div onClick={handleClick}>Rules & Regulation</div>
          <div onClick={handleOnClick}>Live Bids</div>
        </div>

        <div>
          <div><i class="fa-solid fa-bell"></i></div>
          <div><i class="fa-solid fa-cart-shopping"></i></div>
          <div>
            <Link to={'/register'}><div>
            <i class="fa-solid fa-user"></i></div></Link>
          </div>
        </div>
      </div>
  )
}

 
