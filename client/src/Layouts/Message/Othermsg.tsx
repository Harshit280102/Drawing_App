interface Props{
    name:string,
    text:string,
}

export const Othermsg:React.FC<Props> =(props:Props)=>{
    return(
    <div className="w-full h-full ">
     <div className="chat chat-end">
  <div className="chat-header">
    {props.name}
  </div>
  <div className="chat-bubble">{props.text}</div>
</div>
    </div>
    )
}