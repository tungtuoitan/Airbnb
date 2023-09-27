import PlaceTypeItem from "./placeTypeItem";
import {useSelector,useDispatch} from 'react-redux'

export default function PlaceType() {
  return (
    <div
      className="bg-white flex 
        || rounded-xl border-c1 border-solid border-gray-200 
        ||  overflow-hidden  text-sm text-black222"
    >
      <PlaceTypeItem type="Any type" price="95" />
      <PlaceTypeItem type="Room" price="163" isMid={true} />
      <PlaceTypeItem type="Entire home" price="197" />
    </div>
  );
}
