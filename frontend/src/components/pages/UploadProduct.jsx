import React, { useEffect, useState } from 'react'

import socketIOClient from 'socket.io-client';

// const REACT_APP_SERVER_DOMAIN = 'http://localhost:8000';

const UploadProduct = () => {
    const [products, setProducts] = useState([]);
    const [notifications, setNotifications] = useState([]);

   
  
    useEffect(() => {
      const socket = socketIOClient(process.env.REACT_APP_SERVER_DOMAIN);
  
      socket.on('newProduct', (data) => {
        setNotifications((prevNotifications) => [...prevNotifications, data]);
        setProducts((prevProducts) => [...prevProducts, data]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, []);
  
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((product, index) => (
            <div key={index}>
<p>{product.name} - ${product.price}</p>

<p>{product.isAvailble}</p>
<p>{product.description}</p>
            </div>
            
            
          ))}
        </ul>
  
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <div key={index}>
                <p >New product added: {notification.name} - ${notification.price}</p>
            <p>{notification.isAvialble}</p>
            <p><img src={notification.image} /></p>
<p>{notification.description}</p>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default UploadProduct
