import {useSelector,useDispatch} from 'react-redux'
import { resetDate } from '../../reducer/dateItemSlice'


export default function ResetBtn(){
    const dispatch = useDispatch()
    const handleOnClick = ()=>{dispatch(resetDate())}
    return <button className=" font-base color222 underline font-bold h-full "
    onClick = {handleOnClick}>
      Reset
    </button>
}