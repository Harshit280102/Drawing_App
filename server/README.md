import express, { Express, Request, Response , Application } from 'express';
import {Server} from "socket.io"
import dotenv from 'dotenv';
import path from "path";
import http from "http";
import cors from 'cors';


dotenv.config();
const app: Application = express();
const port = process.env.PORT_NO || 8000;


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
});//creating a new Socket.io server

interface usr {
  username:string,
  id:string,
}

interface data {
  sender:string,
  content:string
}

interface msg {
  general:data[],
  random:data[],
  jokes:data[],
  javascript:data[]
}

let users:usr[];
let messages:msg[];

//Socket io requests handed by socket server
io.on("connection",(socket)=>{
  socket.on("join_server",(username)=>{
    const user ={
      username,
      id:socket.id,
    };
    users.push(user);
    io.emit("new user",users);
  });

  socket.on("join_room",(roomName:any,cb:any)=>{
    socket.join(roomName);
    cb(messages[roomName])
    socket.emit("joined",messages[roomName]);
  });

  socket.on("send_messages",({content,to,sender,chatName,isChannel}) =>{
    if (isChannel){
      const payload ={
        content,
        chatName,
        sender,
      };
      socket.to(to).emit("new_message",payload);
    }else{
      const payload ={
        content,
        chatName:sender,
        sender
      }
      socket.to(to).emit("new_messages",payload); 
    }
    if(messages[chatName]){
      
    }
  })
});





//Restful Requests handed by express server

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

// socket.emit("welcome",`welcome message from server ${socket.id}`);

// socket.on("join",function(roomName){
//  socket.join(roomName);
//  socket.to(roomName).emit("recived-message",`Hi You Joined The Room ${roomName}`);
//  console.log(`user joined room ${roomName}`)
// })

// socket.on('message',({message,room})=>{
//  if(room === ""){
//    socket.broadcast.emit("recived-message",message);
//  }else{
//    console.log(`message from user${socket.id}:`,room);
//    console.log(socket.rooms.has("room1"));
//    // io.emit("recived-message",data);
//    socket.to(room).emit("recived-message",message);
//  }
// })
 
// socket.on("createRoom",(data)=>{
// const {name,roomId,userId,host,presenter} =data;
// console.log(data)
// socket.join(roomId);
// socket.emit("userIsJoined",{success:true});
// })



// socket.on("disconnet",()=>{
//  console.log("user Disconnected",socket.id)
// })