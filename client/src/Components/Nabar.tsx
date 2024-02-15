import {Outlet} from 'react-router-dom';
import {Header}  from './Header';

export const Navbar:React.FC =()=>{
    return(<div>
   <Header/>
   <Outlet />
    </div>
    )
}