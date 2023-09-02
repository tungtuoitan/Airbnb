import {useSelector,useDispatch} from 'react-redux'
import { useSpring, animated } from "@react-spring/web";
import useCreateHandleTouchMoveRight from '../hooks/useCreateTouchMoveRight';
import useSetRightSliderFirstTime from '../hooks/useSetSliderRightFirstTime';
import useCreateHandleDragRight from '../hooks/useCreateHandleDragRight';


export default function RightSlider (){
    const handleOnTouchMove = useCreateHandleTouchMoveRight()
    const handleOnDrag = useCreateHandleDragRight()
    const rightSliderValue = useSelector(state=>state.filterSlice.rightSliderValue)
    const graphWidth = useSelector(state=>state.filterSlice.graphWidth)
    
    const springs = useSpring({
        from: { x: graphWidth },
        to: { x: rightSliderValue },
    });
     useSetRightSliderFirstTime()
     
    
    return(
        <animated.div className={`w-c32 h-c32 || rounded-full bg-white ||
        || border-c1 border-solid border-gray-300 cursor-pointer
        || box-shadow-u11
        || relative top-c-48
        `}
        style={{...springs}}
        onTouchMove = {(e)=> handleOnTouchMove(e)}
        onDrag={(e)=> handleOnDrag(e)}

        >
        </animated.div>
    )
}