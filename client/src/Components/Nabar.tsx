import {Outlet} from 'react-router-dom';
import {Header}  from './Header';

interface Props{
    authToken:boolean
  }

export const Navbar:React.FC<Props> =(props:Props)=>{
    return(<div>
   <Header authToken={props.authToken}/>
   <Outlet />
    </div>
    )
}