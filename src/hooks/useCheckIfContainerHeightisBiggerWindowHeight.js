import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export const  useCheckIfContainerHeightIsBiggerWindowHeight=(headerHeight)=> {
    const wishLength = useSelector(s=>s.wishSlice.wishLength)
  const contRef = useRef(null);
  const [heightAuto, setHeightAuto] = useState(true);
  useEffect(() => {
      if (contRef.current) {
        if (
          contRef.current.getBoundingClientRect().height >
          window.innerHeight - headerHeight
        ) {
          console.log(
            contRef.current.getBoundingClientRect().height,
            window.innerHeight - 80
          );
          setHeightAuto(true);
        } else {
          setHeightAuto(false);
        }
      }
  
  }, [wishLength]);

  return [heightAuto,contRef]
  
}
