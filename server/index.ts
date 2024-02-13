import express, { Express, Request, Response , Application } from 'express';
import {Server} from "socket.io"
import dotenv from 'dotenv';
import path from "path";
import http from "http";
import cors from 'cors';


dotenv.config();
const app: Application = express();



app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST"],
  credentials:true,
}))



//Socket Setup
const server =http.createServer(app);  //using a http module to create HTTP Server
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true,
  }
});      //creating a new Socket.io server

//Socket io requests handed by socket server
io.on("connection",(socket)=>{
   socket.emit("welcome",`welcome message from server ${socket.id}`);


   socket.on('message',(data)=>{
    console.log(`message from user${socket.id}:`,data);
    // io.emit("recived-message",data);
    io.to(data.room).emit("recived-message",data.message);
   })



   socket.on("disconnet",()=>{
    console.log("user Disconnected",socket.id)
   })
});





//Restful Requests handed by express server
const port = process.env.PORT_NO || 8000;
// app.use(express.static(path.resolve("./public")));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to My Real-Time Drawing and Chatting App Server');
});

// app.get('/chat',(req: Request, res: Response)=>{
//  console.log("running")
//  return res.sendFile(path.resolve("./public/index.html"));
// })

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});