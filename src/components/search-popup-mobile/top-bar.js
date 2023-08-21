import {useSelector,useDispatch} from 'react-redux'
import {actionSearchPopUp} from '../../actions/action'

export default function TopBar (){
  const isSearchPopUpOpen = useSelector(state => state.root.isSearchPopUpOpen)
  const dispatch = useDispatch()
  const toggleIsSearchPopUpOpen = ()=>{use} 

    return(
        <div className="TOP_BAR      w-full h-c60 
        flex justify-center items-center relative pt-c25 pb-c11 pl-c12">
        <button
          className="ICON     w-8 h-8 rounded-full border-1 border-solid border-gray-400
        flex justify-center items-center absolute left-c20"
        onClick={()=>{dispatch(actionSearchPopUp())}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "12px",
              width: "12px",
              stroke: "currentcolor",
              strokeWidth: "5.33333",
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20M26 6 6 26"></path>
          </svg>
        </button>
        <div className="2_OPTIONS     flex items-center gap-4 font-base font-bold color222">
          <div className=" pb-c2 mainrope-700 font-size22 text-gray-500">
            Find airbnb place
          </div>
        </div>
      </div>
    )
}