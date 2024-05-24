import { useSelector, useDispatch } from "react-redux";
import { useSpring, animated } from "@react-spring/web";



export default function useCreateLeftSpring (){
    const leftSliderValue = useSelector(
        (state) => state.filterSlice.leftSliderValue
      );
      const springs = useSpring({
        to: { x: leftSliderValue },
        immediate: true,
      });
      return springs
    
}