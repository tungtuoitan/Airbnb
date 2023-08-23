import {useSelector,useDispatch} from 'react-redux'
import { resetDate } from '../../reducer/dateItemSlice'
import { actionClickWho } from '../../actions/action'

export default function WhenBottomBar (){
  const dispatch = useDispatch()

    return(
        <div
        className="BOTTOM_BAR        absolute left-0 bottom-0 w-full  
         border-top-05px border-solid border-gray-200 px-6
          py-c12 flex justify-between items-center"
      >
        <button className=" font-base color222 underline font-bold h-full "
        onClick = {()=>{dispatch(resetDate())}}>
          Reset
        </button>
        <button
          className=" bg-222 px-6 h-12 rounded-lg  flex justify-center 
          items-center"
        >
          <button className="flex justify-center items-center gap-c10"
          onClick={()=>{dispatch(actionClickWho())}}>
            <span className="text-white font-bold ">Next</span>
          </button>
        </button>
      </div>
    )
}