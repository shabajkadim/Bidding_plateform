// import express from 'express'
// import AllRoutes from './Router/index.js'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import http from 'http'
// import UploadPro from './models/UploadPro.Schema.js'
// import socketIo from 'socket.io'


// const app=express()
// app.use(express.json({ limit: "10mb" }))
// app.use(cors())
// dotenv.config() 
// const server = http.createServer(app);
// const io = socketIo(server)

// app.get('/',((req,res)=>{
//     res.send("home page..")
// }))

// app.use('/api/v1',AllRoutes)

// io.on('connection', (Socket) => {
//     console.log('A user connected');
//     socket.on('disconnect', () => {
//       console.log('User disconnected');
//     });
//   });

// app.post('/upload-product', async (req, res) => {
//     const { name, price } = req.body;
//     try {
//       const newProduct = new UploadPro({ name, price });
//       await newProduct.save();
//       io.emit('newProduct', newProduct); // Notify all clients
//       res.status(201).json(newProduct);
//     } catch (err) {
//       res.status(500).json({ message: 'Error adding product' });
//     }
//   });

 



// mongoose.connect(process.env.DATABASE_URL).then(
//     ()=>{console.log("database connected..");}
// )

// app.listen(8000,(()=>{
//     console.log("port running on 8000");
// }))




import express from 'express';
import AllRoutes from './Router/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import UploadPro from './models/UploadPro.Schema.js';
import { Server as socketIo } from 'socket.io'; // Correct import

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());
dotenv.config();

const server = http.createServer(app);
const io = new socketIo(server, { 
  cors: {
    origin: "*", // Adjust this according to your frontend URL
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.send("home page..");
});

app.use('/api/v1', AllRoutes);

io.on('connection', (socket) => { // Corrected parameter name
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


app.post('/upload-product', async (req, res) => {
  const { name,category,image, price,isAvailable,description } = req.body;
  try {
    const newProduct = new UploadPro({ name,category,image, price,isAvailable,description });
    await newProduct.save();
    io.emit('newProduct', newProduct); // Notify all clients
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error adding product' });
  }
});

mongoose.connect(process.env.DATABASE_URL).then(
  () => {
    console.log("Database connected..");
  },
  (err) => {
    console.error("Database connection error: ", err);
  }
);

server.listen(8000, () => { // Corrected to use server instead of app
  console.log("Server running on port 8000");
});
