import React, { useContext } from 'react'
// import { AuthContext } from './context/AuthContext'

// import '../components/style/home.css'
const Home = () => {
  // const{state,LOGOUT}=useContext(AuthContext)
  return (
    <div >
     <div className='w-full h-[380px]'>
      <img className='w-h100' src='https://www.withclarity.com/cdn/shop/articles/What_is_Diamond_Depth.jpg?v=1698058572' />
     </div>

     <div className=' w-full mt-2  flex'>
      
      <div className="w-1/2 h-[340px]">
        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStafmTwH0EtVUJ77PgrV9kas8xQFQ5Ps4dGg&s" alt="" />
      </div>

      <div className='w-1/2 h-[340px]'>
        <p className='w-full pl-10 h-full text-cyan-200 bg-orange-800 pt-4 pr-4'> 
          Kadim's auctions offer antique, vintage and modern timepieces by some of the world’s leading sourced from collections and estates from across the globe. We are leading in Watches, Jewellery & Diamond.
 
 Our team of experienced and expert specialists are on hand to provide you with their extensive knowledge and awareness of today’s growing market to help guide you to make the best decisions when deciding to buy or sell at auction.The department has received strong results in recent years.
  
 Our specialists and client services team are on hand to make every step of the buying and selling processes as transparent and seamless as possible.
      </p>
     </div>
     </div>
      {/* <div>{state?.user?.firstname}</div> */}
    </div>
  )
}

export default Home
