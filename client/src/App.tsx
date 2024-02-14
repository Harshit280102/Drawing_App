import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface Room{
  name:string,
  roomId:string,
  userId:string | any,
  host?:boolean,
  presenter?:boolean,
}

function App() {
  const socket =io("http://localhost:4000");


  const [generatedID,setGeneratedID] = useState("");
  
  const [name,setName] = useState("");
   

  const uuid = () => {
    let S4 = () => {
    return (((1 + Math. random ()) * 0x10000) | 0) .toString(16) .substring(1);
    };
    setGeneratedID(S4() +S4() +"-" +S4() +"-" +S4() +"_" +S4() +S4() +S4());
  };
  
  const userID= uuid;

  const handelCreateRoom =(e:any)=>{
    e.preventDefault();
    const roomData:Room ={
      name,
      roomId:generatedID,
      userId:"take_from_auth_id",
      host:true,
      presenter:true,
    }
    socket.emit("createRoom",roomData)
  }
  
  const handlejoinRoom =(e:any)=>{
    e.preventDefault();
    const roomData:Room ={
      name,
      roomId:generatedID,
      userId:"take_from_auth_id",
      host:false,
      presenter:false,
    }
    socket.emit("joinRoom",roomData)
  }

  useEffect(()=>{
    socket.on("userIsJoined",(data)=>{
      if(data.success){
        console.log("User Joined");
      }else{
        console.log("Error User Joined");
      }
    })
  },)
 
  return (
   <section>
    <div>
    <h3>Create Room</h3>
    <form onSubmit={(e)=>handelCreateRoom(e)}>
      <input placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <div>
      <button onClick={uuid} >createRoom</button>
      </div>
    </form>
    <h6>{generatedID}</h6>
    </div>
    <div>
    <h3>Join Room</h3>
    <form onSubmit={(e)=>handlejoinRoom(e)}>
      <input placeholder='Enter Name'></input>
      <input placeholder='Enter Room ID'></input>
      <button onClick={uuid} >createRoom</button>
    </form>
    </div>
   </section>
  )
}

export default App


// const connectionOptions ={
//   "force new connection": true,
//   reconnectionAttempts:"Infinity",
//   timeout: 10000,
//   transports: ["websocket"],
// }


// import {Box, Button, Container, Stack, TextField, Typography} from '@mui/material'

  // const socket =io("http://localhost:4000");

  // const [message,setMessage]=useState("");
  // const [room,setRoom]=useState("");
  // const [roomName,setRoomName]=useState("");
  // const [socketID,setSocketID] =useState<string|undefined>("");
  // const [messages,setMessages] =useState<string[]|undefined>([]);


  // const handleSubmit = (e:any)=>{
  //   e.preventDefault();
  //   socket.emit("message",{message,room});
  //   setMessage("");
  // }

  // const handlejoin =(e:any)=>{
  //   e.preventDefault();
  //   socket.emit("join",roomName);
  //   setRoomName("");
  // }

  // useEffect(()=>{
  //   socket.on("connect",()=>{
  //     setSocketID(socket.id);
  //     console.log("connected",socket.id);
  //   })

  //   socket.on('welcome',(response:any)=>{
  //      console.log(response);
  //   })

  //   socket.on('recived-message',(data)=>{
  //     setMessages((prv:any)=>[...prv,data])
  //     console.log(data)
      
  //   })

  //   return()=>{
  //     socket.disconnect();
  //   }
  // },[])


 // <Container maxWidth="sm">
    //   <Box sx={{height:500}}/>
    //   <Typography variant='h1' component='div' gutterBottom>
    //     Welcome to This App
    //   </Typography>
    //   <Typography variant='h6' component='div' gutterBottom>
    //       {socketID}
    //   </Typography>
    //   <form onSubmit={handlejoin}>
    //   <TextField 
    //     id='outlined-basic' 
    //     label="Join Room" 
    //     variant="outlined" 
    //     value={roomName}
    //     onChange={(e)=>setRoomName(e.target.value)}
    //     />
    //     <Button variant='contained' color='primary' type='submit'>Join</Button>
    //   </form>
    //   <form onSubmit={handleSubmit}>
    //   <TextField 
    //     id='outlined-basic' 
    //     label="Room" 
    //     variant="outlined" 
    //     value={room}
    //     onChange={(e)=>setRoom(e.target.value)}
    //     />
    //     <TextField 
    //     id='outlined-basic' 
    //     label="Message" 
    //     variant="outlined" 
    //     value={message}
    //     onChange={(e)=>setMessage(e.target.value)}
    //     />
    //     <Button variant='contained' color='primary' type='submit'>Send</Button>
    //   </form>
    //  <Stack>
    //   {
    //     messages?.map((m,i)=>(
    //       <Typography key={i} variant='h6' component='div' gutterBottom>
    //     {m}
    //   </Typography>
    //     ))
    //   }
    //  </Stack>
    // </Container>