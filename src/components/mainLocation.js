import CheckItem from "./checkItem";
import { amenities } from "../datas/amenitiesList";

export default function MainLocation() {
  return (
    <div className="grid grid-cols-1 7:grid-cols-2">
      {amenities.location.map((item, index) => {
        return <CheckItem content={item} index={index} key={index} type={'location'}/>;
      })}
    </div>
  );
}
