import ShareIcon from "./shareIconB";

export default function ShareBtnB (){
    const handleOnClick = ()=>{
        alert('Xin lỗi, máy chủ đang bảo chì.')
    }
    return(
        <a className="flex items-center gap-2"
        onClick = {handleOnClick}>
          <ShareIcon />
          <span>Share</span>
        </a>
    )
}