import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../style/bids.css'
import toast from 'react-hot-toast';
const LiveBids = () => {
  
    const [showProduct, setShowProduct] = useState([]);
    console.log(showProduct, "getdata");

    const livebidsProduct=showProduct.filter((el)=>el.isAvailable === "outOfStock",[])
    console.log(livebidsProduct,"livebidsProduct");

    // const livebids=showProduct.filter((el)=>el.isAvailable === "liveBid",[])
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
        <div>
            <div className='bids-image'>
                <img className='w-h100' src='https://media.istockphoto.com/id/1365119130/photo/male-auctioneer-pointing-at-one-of-people-with-auction-paddles.jpg?s=612x612&w=0&k=20&c=5p5wJeoig3-Cyt6oQdj0Mx0U-_4UUKH4GIa1J5wG7qA=' />
            </div>
        
         <div className='bids-title'>Live Bids</div>
            <div className='live-bids-product'>
            { showProduct.map((data, index) => (
                <div key={index} className='bids-product' onClick={()=>{handleProductClick(data)}}>
                    <div className='bids-imd-name' > {data.name}</div>
                     <div><img className='w-h100data' src={data.image} alt={data.name} /></div>
                    <div className='bids-imd-price'><span>$</span> { data.price}</div>
                    <div className='bids-imd-available'>{data.isAvailable}</div>
                    {/* <div>{data.description}</div> */}
                </div>
            ))}
            </div>
        </div>
    );
}



export default LiveBids
