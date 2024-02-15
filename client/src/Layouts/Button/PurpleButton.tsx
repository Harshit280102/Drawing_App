import { Link } from "react-router-dom";

interface Props{
    title:string,
    route:string,
}

export const PurpleButton:React.FC<Props> =(props:Props)=>{
    const {title,route} =props;
    return(
        <button className='bg-transparent font-raleway text-xl hover:bg-violet-800 text-violet-400 font-bold hover:text-white py-2 px-4 hover:border-violet-900 border border-violet-400  rounded'><Link to={`${route}`}>{title}</Link></button> 
    )
}