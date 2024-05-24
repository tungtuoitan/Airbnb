import { useState } from "react";
export default function useSetArrowDisplay(x){
  const [arrowDisplay, setArrowDisplay] = useState(x);
  return {arrowDisplay,setArrowDisplay} 
}