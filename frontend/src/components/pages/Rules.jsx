import React from 'react'
import '../style/ruls.css'

const Rules = () => {
  return (
    <div>
      <div className='ruls-main'>
        <div className='bg-orange-100'>
        <img className='w-full h-96' src='https://t4.ftcdn.net/jpg/05/12/91/19/360_F_512911921_qM8RLqzfpE7JgfvZ4sxNNlHj4E86c0jB.jpg' alt='Auction Rules'/>
        <div className='p-4 font-bold'>  
          <div className='text-4xl text-center'>E-Auction</div>
          <div className='text-2xl mt-4'>Website Auction Rules & Regulations:</div>
           <p className='mt-2'> Browse for your desired products below and simply start placing your bids!<br />
            Bid increments are applicable only in multiples of 1000's.<br />
            If you have been outbid by another participant, you shall receive a notification via email.<br />
            All the bids, including the highest bid can be viewed on the product page by clicking on 'view bids.' Stay active to grab the product!<br />
            Once your bid is placed, it cannot be deleted.<br />
            The winner shall be notified via e-mail, after the auction period.<br />
            To keep a fair spirit of the game, the winners have to honour their purchase within 2 hours.<br />
            If the winners fail to honour their purchase, they can be banned from playing future auctions.<br />
            Using coupons or discount codes after winning a bid will cancel the sale automatically.</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Rules
