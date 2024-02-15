import { Server,Socket } from "socket.io";
import logger from "./logger";

const EVENTS ={
    connection:'connection'
}



function socket({io}:{io:Server}){
    logger.info(`socket is Enabled`)
    io.on(EVENTS.connection,(socket:Socket)=>{
       logger.info(`User connected ${socket.id}`);
    
    })
}