import {useDispatch,useSelector} from 'react-redux'

export function handleOnDragStart (e){
    var emptyImage = new Image();
    emptyImage.src =
      "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    e.dataTransfer.setDragImage(emptyImage, 0, 0);

}