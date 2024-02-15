import io  from 'socket.io-client';
import {Route, Routes} from "react-router-dom";
import { Navbar } from './Components/Nabar';
import { Home } from './Pages/Home';
import { SOCKET_URL } from './config/default';



function App() {
  const socket =io(SOCKET_URL);
  console.log(SOCKET_URL)

  return (
    <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    
  </Route>
  </Routes>
  )
}

export default App


