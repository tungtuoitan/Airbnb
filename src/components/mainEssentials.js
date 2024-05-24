import { useSelector } from "react-redux";
import CheckItem from "./checkItem";
import { amenities } from "../datas/amenitiesList";

export default function MainEssentials() {
  const isDisplayFull = useSelector(
    (state) => state.filterSlice.filter.isDisplayFull
  );

  return (
    <div className="grid grid-cols-1 7:grid-cols-2">
      {amenities.essentials.map((item, index) => {
        if (isDisplayFull === false && index >= 4) {
          return;
        }
        return <CheckItem content={item} index={index} key={index} type='essentials' />;
      })}
    </div>
  );
}
