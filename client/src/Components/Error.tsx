interface Props{
    message:string,
}
export const Error:React.FC<Props> =(props:Props)=>{
    return(
        <div className="flex justify-center align-baseline w-[100%] h-[100%] mt-[200px]">
            <div className="block">
            <span className="loading loading-spinner loading-lg"></span><br/>
            </div>
            <div className="font-raleway text-2xl ">
            <p>{props.message}</p>
            </div>
        </div>
    )
}