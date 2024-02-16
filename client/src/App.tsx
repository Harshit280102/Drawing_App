import io  from 'socket.io-client';
import {Route, Routes} from "react-router-dom";
import { Navbar } from './Components/Nabar';
import { Home } from './Pages/Home';
import { Scribble } from './Pages/Scribble';
import { SOCKET_URL } from './config/default';



function App() {
  const socket =io(SOCKET_URL);
  console.log(SOCKET_URL)
  const authToken=true;
  return (
    <Routes>
    <Route path='/' element={<Navbar authToken={authToken}/>}>
    <Route index element={<Home authToken={authToken}/>}/>
    {authToken &&
     (<Route path='/playscribble' element={<Scribble/>}/>)
    }
    
  </Route>
  </Routes>
  )
}

export default App


'bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95'