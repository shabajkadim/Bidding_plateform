import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Home = () => {
  
  const[product,setProduct]=useState([])
  console.log(product,'product');

  console.log(process.env.REACT_APP_SERVER_DOMAIN);
  const getSalesProduct=async()=>{
   try{
    const response=await axios.get(process.env.REACT_APP_SERVER_DOMAIN + '/api/v1/product/get-product')
    if(response?.data?.success){
      setProduct(response.data.getAllData)
    }else{
      toast("server error")
    }
   }catch(error){
    console.log(error);
   }
  }

  useEffect(()=>{
    getSalesProduct()
  },[])

  return (
    <div className='bg-slate-200' >
     <div className='w-full h-[500px]'>
      <img className='w-h100 ' src='https://www.withclarity.com/cdn/shop/articles/What_is_Diamond_Depth.jpg?v=1698058572' />
     </div>

     <div className='border-2 mt-4 border-slate-200 text-2xl w-[96%] m-auto md:text-4xl font-bold'>Sales Highlights</div>
     <div className='w-[96%]  m-auto mt-8 mb-8 border-slate-500  flex gap-5 overflow-x-hidden flex-row flex-nowrap  '>
      
      {product.map((data,index)=>{
        return(
          <div className='w-40 md:w-60 flex-shrink-0 gap-3   animate-scroll' key={index}>
            <p><img className='w-full h-40 md:h-60 transition-transform transform hover:scale-110 ' src={data.image} /></p>
          </div>
        )
      })}
     </div>
     

    
    
     
     <div className=' w-full  mt-2  md:flex'>
      
      <div className=" w-full md:w-1/2 h-[340px]">
        <img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStafmTwH0EtVUJ77PgrV9kas8xQFQ5Ps4dGg&s" alt="" />
      </div>

      <div className=' w-full md:w-1/2 mb-2 md:mb-4 md:h-[340px]'>
        <p className='w-full overflow-hidden pl-4 md:pl-10 h-full text-cyan-200 bg-orange-800 pt-4 md:pr-4'> 
          Kadim's auctions offer antique, vintage and modern timepieces by some of the world’s leading sourced from collections and estates from across the globe. We are leading in Watches, Jewellery & Diamond.
 
         Our team of experienced and expert specialists are on hand to provide you with their extensive knowledge and awareness of today’s growing market to help guide you to make the best decisions when deciding to buy or sell at auction.The department has received strong results in recent years.
  
          Our specialists and client services team are on hand to make every step of the buying and selling processes as transparent and seamless as possible.
      </p>
     </div>
     </div>
     
    </div>
  )
}

export default Home


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const Home = () => {
//   const [product, setProduct] = useState([]);
//   console.log(product, 'product');

//   const getSalesProduct = async () => {
//     try {
//       const response = await axios.get(process.env.REACT_APP_SERVER_DOMAIN + '/api/v1/product/get-product');
//       if (response?.data?.success) {
//         setProduct(response.data.getAllData);
//       } else {
//         toast("server error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getSalesProduct();
//   }, []);

//   return (
//     <div>
//       <div className='w-full h-[380px]'>
//         <img className='w-full h-full object-cover' src='https://www.withclarity.com/cdn/shop/articles/What_is_Diamond_Depth.jpg?v=1698058572' alt='Header' />
//       </div>

//       {/* Infinite Scrolling Image Carousel */}
//       <div className='w-full overflow-x-hidden'>
//         <div className='flex gap-5 animate-scroll whitespace-nowrap'>
//           {product.concat(product).map((data, index) => (
//             <div className='w-60 flex-shrink-0' key={index}>
//               <p><img className='w-full h-60 object-cover' src={data.image} alt={`Product ${index}`} /></p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='w-full mt-2 md:flex'>
//         <div className="w-full md:w-1/2 h-[340px]">
//           <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStafmTwH0EtVUJ77PgrV9kas8xQFQ5Ps4dGg&s" alt="Side Image" />
//         </div>

//         <div className='w-full md:w-1/2 mb-2 md:mb-4 md:h-[340px]'>
//           <p className='w-full overflow-hidden pl-4 md:pl-10 h-full text-cyan-200 bg-orange-800 pt-4 md:pr-4'>
//             Kadim's auctions offer antique, vintage and modern timepieces by some of the world’s leading sourced from collections and estates from across the globe. We are leading in Watches, Jewellery & Diamond.

//             Our team of experienced and expert specialists are on hand to provide you with their extensive knowledge and awareness of today’s growing market to help guide you to make the best decisions when deciding to buy or sell at auction. The department has received strong results in recent years.

//             Our specialists and client services team are on hand to make every step of the buying and selling processes as transparent and seamless as possible.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
