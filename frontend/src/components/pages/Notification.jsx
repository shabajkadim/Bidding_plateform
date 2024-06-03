// import React from 'react'

// const Notification = () => {
//   return (
//     <div>
//       Notification
//     </div>
//   )
// }

// export default Notification

// import React, { useEffect, useState } from 'react'

// import socketIOClient from 'socket.io-client';

// // const REACT_APP_SERVER_DOMAIN = 'http://localhost:8000';

// const Notification = () => {
//     const [products, setProducts] = useState([]);
//     const [notifications, setNotifications] = useState([]);

   
  
//     useEffect(() => {
//       const socket = socketIOClient(process.env.REACT_APP_SERVER_DOMAIN);
  
//       socket.on('newProduct', (data) => {
//         setNotifications((prevNotifications) => [...prevNotifications, data]);
//         setProducts((prevProducts) => [...prevProducts, data]);
//       },[]);

//       const newsocket=socketIOClient(process.env.REACT_APP_SERVER_DOMAIN)

//       newsocket.on('newAllProduct',(element)=>{
//         setNotifications((prevNotifications) => [...prevNotifications,element]);
//         setProducts((prevProducts) => [...prevProducts, element]);
//       },[])
      
//       return () => {
//         socket.disconnect(); 
//         newsocket.disconnect() 
//       };
//     }, []);
  
//     return (
//       <div>
//         <h1>Product List</h1>
//         <ul>
//           {products.map((product, index) => (
//             <div key={index}>
// <p>{product.name} - ${product.price}</p>

// <p>{product.isAvailble}</p>
// <p>{product.description}</p>
//             </div>
            
            
//           ))}
//         </ul>
  
//         <h2>Notifications</h2>
//         <ul>
//           {notifications.map((notification, index) => (
//             <div key={index}>
//                 <p >New product added: {notification.name} - ${notification.price}</p>
//             <p>{notification.isAvialble}</p>
//             <p><img src={notification.image} /></p>
// <p>{notification.description}</p>
//             </div>
//           ))}
//         </ul>
//       </div>
//     );
// }

// export default Notification











// import React, { useEffect, useState } from 'react';
// import socketIOClient from 'socket.io-client';

// // const REACT_APP_SERVER_DOMAIN = 'http://localhost:8000';

// const Notification = () => {
//   const [products, setProducts] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     const socket = socketIOClient(process.env.REACT_APP_SERVER_DOMAIN);

//     socket.on('newProduct', (data) => {
//       setNotifications((prevNotifications) => [
//         ...prevNotifications,
//         `New product added: ${data.name} - $${data.price}`,
//       ]);
//       setProducts((prevProducts) => [...prevProducts, data]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product, index) => (
//           <div key={index}>
//             <p>{product.name} - ${product.price}</p>
//             <p>{product.isAvailable}</p>
//             <p>{product.description}</p>
//             <img src={product.image} alt={product.name} />
//           </div>
//         ))}
//       </ul>

//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map((notification, index) => (
//           <div key={index}>
//             <p>{notification}</p>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notification;

import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const Notification = () => {
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Attempt to retrieve product data from localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
          setProducts(storedProducts);
        }

        // Fetch initial product data from the server
        const response = await fetch(process.env.REACT_APP_SERVER_DOMAIN + '/products');
        const initialProducts = await response.json();
        setProducts(initialProducts);
        // Save initial product data to localStorage
        localStorage.setItem('products', JSON.stringify(initialProducts));
      } catch (error) {
        console.error('Error fetching initial products:', error);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();

    const socket = socketIOClient(process.env.REACT_APP_SERVER_DOMAIN);

    // Listen for new product events
    socket.on('newProduct', (data) => {
      setProducts((prevProducts) => [...prevProducts, data]);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        `New product added: ${data.name} - $${data.price}`,
      ]);
      // Update localStorage with new product data
      localStorage.setItem('products', JSON.stringify([...products, data]));
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
            <p>{product.isAvailable}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </ul>

      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <div key={index}>
            <p>{notification}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Notification;






