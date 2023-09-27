import { useDispatch,useSelector } from "react-redux";
import { setRightSlider,setRightValue } from "../reducer/filterSlice";
import { useEffect } from "react";

export default function useSetRightSliderFirstTime(){
    const dispatch = useDispatch()
    const graphWidth = useSelector(state=>state.filterSlice.graphWidth)
    useEffect(()=>{

        // dispatch(setRightSlider(graphWidth))
        dispatch(setRightValue(graphWidth/100*100))

    },[graphWidth])
    return 
}