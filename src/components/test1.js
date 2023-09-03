import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleTouchMoveLeft from "../hooks/useCreateTouchMoveLeft";
import useCreateHandleDragLeft from "../hooks/useCreateHandleDragLeft";
import {useRef,useState,useEffect} from 'react'

export default function Test1() {
  let isDraggin = false
  const animateRef = useRef(null)
  const bounding= ()=>animateRef.current.getBoundingClientRect()
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const handleOnMouseDown =(e)=>{
    if(e.clientX > bounding().left && e.clientX<bounding().left + 80 )
    isDraggin = true
  }
  const handleOnMouseUp =()=>{
    isDraggin = false
  }
  useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
      if(isDraggin){
        api.start({
          from: { x: bounding.left },
          to: { x: e.clientX - 40 },
          immediate:true
        });
      }
    })
  },[])
  

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: "#ff6d6d",
        borderRadius: 8,
        ...springs,
      }}
      ref={animateRef}
      onMouseDown={(e)=>handleOnMouseDown(e)}
      onMouseUp={(e)=>handleOnMouseUp(e)}
    />
  );
}
