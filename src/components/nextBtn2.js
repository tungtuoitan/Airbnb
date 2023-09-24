import { useContext } from "react"
import { useDispatch,useSelector } from "react-redux"
import { IndexContext } from "../context/indexContext"
import { checkIsLaptop } from "../function/checkIsLaptop"

function NextButton2({ onClick, isHovering }) {
  const i = useContext(IndexContext)
  const hoveringIndex = useSelector(s=>s.bodySlice.hoveringIndex)
    const onClickk =(e)=>{
      console.log(0)
        e.preventDefault()
        onClick()
    }
    return (
      <button name="next-btn"
        className={`NEXT_BTN absolute  bg-white-u1 w-8 h-8 
        hover:border-c1 hover:border-solid  hover:border-white  hover:bg-white
        rounded-full  right-c12 y-center box-shadow-u2  z100
       ${isHovering && i===hoveringIndex ? "" : "hidden"}
       ${checkIsLaptop()?'':'hidden'}`}
        onClick={e=>onClickk(e)}
      >
        <i name='next-btn'
          className="fa-solid fa-angle-right fa-sm"
          style={{ color: "#222222", marginLeft: "0px" }}
        ></i>
      </button>
    );
  }
  
  export default NextButton2;
  