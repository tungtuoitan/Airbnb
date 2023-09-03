import {useDispatch,useSelector} from 'react-redux'
import { setIsPress } from '../reducer/filterSlice';

export function handleOnDragStart (){
    var emptyImage = new Image();
    emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    e.dataTransfer.setDragImage(emptyImage, 0, 0);

}