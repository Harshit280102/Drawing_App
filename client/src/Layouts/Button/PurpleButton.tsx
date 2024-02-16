import { Link } from "react-router-dom";

interface Props{
    title:string,
    route:string,
}

export const PurpleButton:React.FC<Props> =(props:Props)=>{
    const {title,route} =props;
    return(
        <button className='bg-transparent font-raleway text-md ring-violet-600 hover:text-white px-4 py-3 hover:border-violet-900 border border-violet-400 font-semibold inline-block text-violet-400 cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 active:scale-95'><Link to={`${route}`}>{title}</Link></button> 
    )
}
'bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95'
