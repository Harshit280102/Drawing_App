interface Props{
    text:string,
}

export const Mymsg:React.FC<Props> =(props:Props)=>{
    return(
    <div className="w-full h-full">
    <div className="chat chat-start">
  <div className="chat-header">
    you
  </div>
  <div className="chat-bubble">{props.text}</div>
</div>
    </div>
    )
}