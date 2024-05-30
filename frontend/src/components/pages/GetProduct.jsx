import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetProduct = () => {

    const [showProduct, setShowProduct] = useState([]);
    console.log(showProduct, "getdata");

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
            <h2>Products</h2>
            {Array.isArray(showProduct) && showProduct.map((data, index) => (
                <div key={index}>
                    <div>{data.name}</div>
                    {data.image && <img src={data.image} alt={data.name} />} {/* Check if data.image exists before rendering */}
                    <div>{data.price}</div>
                    <div>{data.isAvailable}</div>
                    <div>{data.description}</div>
                </div>
            ))}
        </div>
    );
}

export default GetProduct;
