// import UploadPro from '../models/UploadPro.Schema.js'
// export const UploadProduct=async(req,res)=>{
//     try {
//         const newProduct = new UploadPro({ name, price });
//         await newProduct.save();
//         io.emit('newProduct', newProduct); // Notify all clients
//         res.status(201).json(newProduct);
//       } catch (err) {
//         res.status(500).json({ message: 'Error adding product' });
//       }
// // }
// // const express = require('express');
// // const http = require('http');
// // const socketIo = require('socket.io');

// // const Product = require('./models/Product'); // Assuming you have a Product model

// // const app = express();
// // const server = http.createServer(app);
// // const io = socketIo(server);

// // Middleware setup
// // app.use(express.json());

// // MongoDB connection


// // Socket.io connection
// // io.on('connection', (socket) => {
// //   console.log('A user connected');
// //   socket.on('disconnect', () => {
// //     console.log('User disconnected');
// //   });
// // });

// // Endpoint to add a new product
// // app.post('/add-product', async (req, res) => {
// //   const { name, price } = req.body;
// //   try {
// //     const newProduct = new Product({ name, price });
// //     await newProduct.save();
// //     io.emit('newProduct', newProduct); // Notify all clients
// //     res.status(201).json(newProduct);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error adding product' });
// //   }
// // });



