import { amenlities } from "../datas/amenlityArr";
import AmenlityItem from "./amenlityItem";
import ItemA from "./itemA";

export default function ItemAGroup({arr}) {
  return (
    <div className="mb-4 mt-c20 grid 5:grid-cols-2">
      {arr.map((item, index) => {
        return <ItemA item={item} key={index} />;
      })}
    </div>
  );
}
