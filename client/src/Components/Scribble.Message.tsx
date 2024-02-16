import { Othermsg } from "../Layouts/Message/Othermsg"
import { Mymsg } from "../Layouts/Message/Mymsg"

export const ScribbleMessage:React.FC =()=>{
    return(
    <div className="max-w-[300px] min-w-[30%]  max-h-screen">
     <Othermsg text="Hi" name="Joshi"/>
     <Mymsg text="Hello"/>
     <Othermsg text="Hi" name="Goyal"/>
     <Othermsg text="Hi" name="Priyanshu"/>
     <Mymsg text="Hello Everyone"/>
    </div>
    )
}