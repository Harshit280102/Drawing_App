import { ChannelButton } from "../Layouts/Button/ChannelButton";

export const Sidebar:React.FC =()=>{

    return(
        <main className="text-center rounded shadow-xl">
         <div className="border border-sky-500">
           <h4>Channels</h4>
           <div className="">
           <ChannelButton Locked={true} title="General" route="/channel"/>
           <ChannelButton title="Java" route="/channel"/>
           <ChannelButton title="Jokes" route="/channel"/>
           <ChannelButton title="Web DEv" route="/channel"/>
           <ChannelButton title="JavaScript" route="/channel"/>
           </div>
           
         </div>
        </main>
    )
}