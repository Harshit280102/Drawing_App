import { ScribbleMessage } from "../Components/Scribble.Message"
import { Input } from "../Layouts/Message/Input"
export const Scribble:React.FC =()=>{
    return(
    <div className="w-full h-full text-center">
       <ScribbleMessage/>
       <div className="absolute bottom-0 "> 
       <Input/>
       </div>
    </div>
    )
}