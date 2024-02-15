import { Link } from "react-router-dom";
import { FaLockOpen,FaHashtag } from "react-icons/fa6";

interface Props{
    title:string,
    route:string,
    Locked?:boolean,
}

export const ChannelButton:React.FC<Props> =(props:Props)=>{
    const {title,route,Locked} =props;
    return(
        <button className='border border-red-600 w-[100%]'>
        {(Locked) ?<FaLockOpen /> : <FaHashtag/> } 
            <Link to={`${route}`}>{title}</Link>
            </button> 
    )
}