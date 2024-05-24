import DateItem from "./date-item";

export default function DatesRow({ fiveArrs, index1 }) {
  return (
    <tr className="flex justify-around   w-full ">
      {fiveArrs[index1].map((item, index) => {
        return <DateItem item={item}   available={true} key={index} />;
      })}
    </tr>
  );
}
