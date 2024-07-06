import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../style/bids.css'
import toast from 'react-hot-toast';
const LiveBids = () => {
  
    const [showProduct, setShowProduct] = useState([]);
    console.log(showProduct, "getdata");

    const livebidsProduct=showProduct.filter((el)=>el.isAvailable === "outOfStock",[])
    console.log(livebidsProduct,"livebidsProduct");

    // const product=showProduct.filter((el)=>el._id === id,[])
    // console.log(livebids,"livebids");

    const handleProductClick = (product) => {
        if (product.isAvailable === "outOfStock") {
            toast('product is out of stock!');
        }else{
            toast("notify as live bids")
        }
    };

    async function getData() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/product/get-product`);
            if (response?.data?.success) {
                setShowProduct(response.data.getAllData); // Assuming the array of products is under the key "products"
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='bg-slate-200'>
            <div className='w-full h-[400px]'>
                <img className='w-full h-full' src='https://media.istockphoto.com/id/1365119130/photo/male-auctioneer-pointing-at-one-of-people-with-auction-paddles.jpg?s=612x612&w=0&k=20&c=5p5wJeoig3-Cyt6oQdj0Mx0U-_4UUKH4GIa1J5wG7qA=' />
            </div>
        
         <div className='w-[88%] m-auto text-4xl mt-8 font-bold  text-slate-900 mb-8  '>Live Bids</div>

        <div className='w-[90%] m-auto  gap-4    flex flex-wrap   justify-around'>
            { showProduct.map((data, index) => (
                <div key={index} className='  w-[340px] mb-8 h-[300px]  hover:shadow-3xl transition-transform transform hover:scale-110 border-slate-800 shadow-2xl shadow-slate-700 cursor-pointer  flex flex-col justify-between ' onClick={()=>{handleProductClick(data)}}>
                    <div className=' h-[50px] overflow-hidden p-2 font-bold' > {data.name}</div>
                     <div><img className='w-full h-[140px]' src={data.image} alt={data.name} /></div>
                    <div className=' p-2 font-bold'><span>$</span> { data.price}</div>
                    <div className=' p-2 font-bold'>{data.isAvailable}</div>
                    {/* <div>{data.description}</div> */}
                </div>
            ))}
        </div>
        </div>
    );
}



export default LiveBids
