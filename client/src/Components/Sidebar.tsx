import { ChannelButton } from "../Layouts/Button/ChannelButton";
import { DMButton } from "../Layouts/Button/DMButton";


export const Sidebar:React.FC =()=>{

    return(
        <main className="text-center py-10 ">
         <div className="mb-16">
           <h4 className="text-xl font-raleway font-bold">CHANNELS</h4>
           <div className="mt-5">
           <ChannelButton Locked={false} title="General" route="/channel"/>
           <ChannelButton Locked={true}  title="Java" route="/channel"/>
           <ChannelButton title="Jokes" route="/channel"/>
           <ChannelButton title="Web Dev" route="/channel"/>
           <ChannelButton title="JavaScript" route="/channel"/>
           </div>
           </div>
           <div className="mb-10">
           <h4 className="text-xl font-raleway font-bold">DIRECT MESSAGES</h4>
           <div className="mt-5">
           <DMButton isActive={true} name="Wranjal Goyal" route="/DirectMessage"/>
           <DMButton isActive={false} name="Arpit Khanuli" route="/DirectMessage"/>
           <DMButton isActive={true} name="Akshat Virmani" route="/DirectMessage"/>
           <DMButton isActive={false} name="Harshit Joshi" route="/DirectMessage"/>
           </div>
         </div>
        </main>
    )
}