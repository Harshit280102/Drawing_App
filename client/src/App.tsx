import { useEffect, useState } from 'react'
import './App.css'
import { io } from 'socket.io-client'
import {Box, Button, Container, Stack, TextField, Typography} from '@mui/material'

function App() {
  const socket =io("http://localhost:4000");

  const [message,setMessage]=useState("");
  const [room,setRoom]=useState("");
  const [socketID,setSocketID] =useState<string|undefined>("");
  const [messages,setMessages] =useState<string[]|undefined>([]);


  const handleSubmit = (e:any)=>{
    e.preventDefault();
    socket.emit("message",{message,room});
    setMessage("");
  }

  useEffect(()=>{
    socket.on("connect",()=>{
      setSocketID(socket.id);
       console.log("connected",socket.id);
    })

    socket.on('welcome',(response:any)=>{
       console.log(response);
    })

    socket.on('recived-message',(data)=>{
      setMessages((prv:any)=>[...prv,data])
      console.log(data)
      
    })

    return()=>{
      socket.disconnect();
    }
  },[])

 

  return (
    <Container maxWidth="sm">
      <Box sx={{height:500}}/>
      <Typography variant='h1' component='div' gutterBottom>
        Welcome to This App
      </Typography>
      <Typography variant='h6' component='div' gutterBottom>
          {socketID}
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField 
        id='outlined-basic' 
        label="Room" 
        variant="outlined" 
        value={room}
        onChange={(e)=>setRoom(e.target.value)}
        />
        <TextField 
        id='outlined-basic' 
        label="Message" 
        variant="outlined" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        <Button variant='contained' color='primary' type='submit'>Send</Button>
      </form>
     <Stack>
      {
        messages?.map((m,i)=>(
          <Typography key={i} variant='h6' component='div' gutterBottom>
        {m}
      </Typography>
        ))
      }
     </Stack>
    </Container>
  )
}

export default App
