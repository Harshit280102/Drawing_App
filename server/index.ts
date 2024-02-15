import express, { Express, Request, Response , Application } from 'express';
import {Server} from "socket.io"
import dotenv from 'dotenv';
import http from "http";
import cors from 'cors';
import logger from "./logger";

dotenv.config();
const app: Application = express();
const port = process.env.PORT_NO || 8000;

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST"],
  credentials:true,
}))


const server =http.createServer(app);  
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true,
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to My Real-Time Drawing and Chatting App Server');
});

server.listen(port, () => {
  logger.info(`Server is Running At Port ${port}`)
});