import express, { Express, Request, Response , Application } from 'express';
import {Server} from "socket.io"
import dotenv from 'dotenv';
import path from "path";
import http from "http";


dotenv.config();
const app: Application = express();

//Socket Setup
const server =http.createServer(app);  //using a http module to create HTTP Server
const io = new Server(server);      //creating a new Socket.io server

//Socket io requests handed by socket server
io.on("connection",(client_socket)=>{
   console.log("A client has added into the socket server", client_socket.id)
});





//Restful Requests handed by express server
const port = process.env.PORT_NO || 8000;
app.use(express.static(path.resolve("./public")));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to My Real-Time Drawing and Chatting App Server');
});

app.get('/chat',(req: Request, res: Response)=>{
 console.log("running")
 return res.sendFile(path.resolve("./public/index.html"));
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});