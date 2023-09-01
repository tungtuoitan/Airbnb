import {useSelector,useDispatch} from 'react-redux'
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleDragRight from '../hooks/useCreateDragRight';


export default function ControlRight (){
    const handleOnDragStart = useCreateHandleDragRight()
    const controlValueRight = useSelector(state=>state.filterSlice.controlValueRight)
    const widthContainer = useSelector(state=>state.filterSlice.widthContainer)

    const springs = useSpring({
        from: { x: widthContainer },
        to: { x: controlValueRight },
      });
    
    return(
        <animated.div className={`w-c32 h-c32 || rounded-full bg-white ||
        || border-c1 border-solid border-gray-300 
        || box-shadow-u11
        || relative top-c-48
        `}
        style={{...springs}}
        onTouchMove = {(e)=> handleOnDragStart(e)}

        />
    )
}