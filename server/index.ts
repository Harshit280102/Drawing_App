import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import path = require("path")
import http =require("http");

//For env File 
dotenv.config();

const app: Application = express();
const server =http.createServer(app);
const port = process.env.PORT_NO || 8000;

// app.use(express.static(path.resolve("./public")));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to My Real-Time Drawing Apps Server');
});

app.get('/chat',(req: Request, res: Response)=>{
 console.log("running")
 return res.sendFile("/public/index.html");
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});