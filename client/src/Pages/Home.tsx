import { Sidebar } from "../Components/Sidebar";

export const Home:React.FC =()=>{

    const authToken=true;
    return(
    <section className="">
    {authToken && <main className="w-[250px]  min-w-[20%] h-full bg-black md:block  hidden">
        <Sidebar/>
    </main> }
    </section>
    )
}