import { useDispatch, useSelector } from "react-redux";

export const  calculateTotalNights=()=>{
    const firstDate = useSelector((s) => s.dateItemSlice.firstDate);
  const lastDate = useSelector((s) => s.dateItemSlice.lastDate);
  let x = isNaN(lastDate[0] - firstDate[0]) ? "?" : lastDate[0] - firstDate[0];
  if (lastDate[0] === undefined || firstDate[0] === undefined) {
    x = "?";
  } else {
    x =
      lastDate[2] * 365 +
      (lastDate[1] + 1) * 30 +
      lastDate[0] -
      firstDate[2] * 365 -
      (firstDate[1] + 1) * 30 -
      firstDate[0];
  }
  return x
    
}