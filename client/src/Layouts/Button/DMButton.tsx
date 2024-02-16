import { Link } from "react-router-dom";

interface Props{
    name:string,
    route:string,
    isActive?:boolean,
}

export const DMButton:React.FC<Props> =(props:Props)=>{
    const {name,route,isActive} =props;
    let parts=name.split(" ");
    const F=parts[0].charAt(0);
    const L=parts[1].charAt(0);
    return(
        <div className="flex mt-2 mx-4 my-auto rounded hover:bg-indigo-300/10 border border-indigo-300/10 px-4 py-2 cursor-pointer uppercase transition duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/10 focus-visible:ring-offset-2 active:scale-95">
            <div className="my-auto">
            {(isActive) ?
            <div className="avatar online placeholder">
            <div className="bg-neutral-content text-neutral rounded-full w-10">
              <span className="text-xl font-raleway">{F}{L}</span>
            </div>
          </div> 
            : 
            <div className="avatar offline placeholder">
            <div className="bg-neutral-content text-neutral rounded-full w-10">
              <span className="text-xl font-raleway">{F}{L}</span>
            </div>
          </div> } 
            </div>
        <button className='w-[80%] text-start text-zinc-300 text-nowrap overflow-hidden ml-4 font-raleway'>
        <Link to={`${route}`}>{name}</Link>
        </button> 
        </div>
        
    )
}