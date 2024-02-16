import { Link } from "react-router-dom";
import { PurpleButton } from "../Layouts/Button/PurpleButton";

interface Props{
    authToken:boolean
  }

export const Header:React.FC<Props> =(props:Props)=>{
    return(
        <main className="text-center shadow-2xl bg-[#242424]">
        <header className="flex justify-between items-center py-6 mx-8 font-xl ">
       <Link to="/" className="font-raleway font-bold text-4xl p-2">W!?E</Link>
       <nav>
          {!props.authToken ? 
          <div className='flex gap-6  items-center'>
            <PurpleButton title="LogIn" route="/login"/>
            <PurpleButton title="Register" route="/register"/>
         </div> :
              <PurpleButton title="LogOut" route="/logout"/> }
         </nav>
     </header >
         </main>
        
        
    )
}