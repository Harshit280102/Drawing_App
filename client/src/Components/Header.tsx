import { Link } from "react-router-dom";
import { PurpleButton } from "../Layouts/Button/PurpleButton";

export const Header:React.FC =()=>{
 
  
const authToken =false
  

    return(
        <main className="text-center bg-gray- rounded shadow-xl">
        <header className="flex justify-between items-center py-6 mx-6 mb-5 font-xl ">
       <Link to="/" className="font-raleway font-bold text-4xl p-2">W!?E</Link>
       <nav>
          {!authToken ? 
          <div className='flex gap-3  items-center'>
            <PurpleButton title="LogIn" route="/login"/>
            <PurpleButton title="Register" route="/register"/>
         </div> :
              <PurpleButton title="LogOut" route="/logout"/> }
         </nav>
     </header >
         </main>
        
        
    )
}