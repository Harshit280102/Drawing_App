import { Sidebar } from "../Components/Sidebar";
import { Hero } from "../Layouts/Hero";

interface Props{
    authToken:boolean
}

export const Home:React.FC<Props> =(props:Props)=>{

    
    return(
    <section>
    {!props.authToken &&<Hero/>}
    {props.authToken && <main className="w-[250px] md:block hidden rounded-r-lg -z-40 pb-5 bg-[#1d1d1d] shadow-2xl">
        <Sidebar/>
    </main> }
    </section>
    )
}