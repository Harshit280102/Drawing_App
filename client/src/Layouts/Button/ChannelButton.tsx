import { Link } from "react-router-dom";


interface Props{
    title:string,
    route:string,
    Locked?:boolean,
}

export const ChannelButton:React.FC<Props> =(props:Props)=>{
    const {title,route,Locked} =props;
    return(
        <div className="flex mt-2 mx-4 my-auto px-1 py-2 rounded-md hover:bg-indigo-300/10 border border-indigo-300/10  cursor-pointer uppercase transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:indigo-300/10  focus-visible:ring-offset-2 active:scale-95">
            <div className="my-auto">
            {(Locked) ?<div className="lg:ml-4 md:ml-2 text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
</svg>
 </div>: <div className=" lg:ml-4 md:ml-2 text-zinc-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
</div>} 
            </div>
        <button className='w-[80%] text-start text-zinc-300 text-nowrap overflow-hidden ml-4 font-raleway'>
        <Link to={`${route}`}>{title}</Link>
        </button> 
        </div>
        
    )
}