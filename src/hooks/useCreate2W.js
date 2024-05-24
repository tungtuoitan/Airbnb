import { useDispatch, useSelector } from "react-redux";
import { useCalculateTotalGuests } from "../hooks/useCalculateTotalGuest";


export const useCreate2W = ()=>{
    const where = useSelector(s=>s.root.where)
    

    const firstDate = useSelector(s=>s.dateItemSlice.firstDate)
    const lastDate = useSelector(s=>s.dateItemSlice.lastDate)
    const who = useCalculateTotalGuests();
    let when 
    if(firstDate.length===0){
      when = 'Anyweek'
    } else if(firstDate.length!==0 && lastDate.length===0){
     when = firstDate[0]+ '.' + firstDate[1] +'-> ...' }
      else {
        when = firstDate[0]+ '.' + firstDate[1] +'->' + lastDate[0]+ '.' + lastDate[1]
      }
      return {where,when,who}
}